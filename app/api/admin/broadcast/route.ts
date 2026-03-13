import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { sendEmail } from '@/lib/sendEmail';

export async function POST(req: Request) {
  // A simple security check using an admin token from env parameters
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');
  
  if (secret !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: 'Unauthorized broadcast request' }, { status: 401 });
  }

  try {
    const { campaignType, subject, html } = await req.json();

    if (!campaignType || !subject || !html) {
      return NextResponse.json({ error: 'Missing required campaign parameters' }, { status: 400 });
    }

    const usersRef = collection(db, 'users');
    let dbQuery;

    // Filter based on their subscription preferences
    if (campaignType === 'newsletter') {
      dbQuery = query(usersRef, where("newsletterSubscribed", "==", true));
    } else if (campaignType === 'alert') {
      dbQuery = query(usersRef, where("alerts.emergency", "==", true));
    } else {
      return NextResponse.json({ error: 'Invalid campaignType. Must be "newsletter" or "alert"' }, { status: 400 });
    }

    const snapshot = await getDocs(dbQuery);
    const results = { successful: 0, failed: 0 };

    // Start dispatching emails depending on user preferences
    const promises = snapshot.docs.map(async (docSnap) => {
      const userData = docSnap.data() as { email?: string };
      const userId = docSnap.id;
      
      if (userData.email) {
        try {
          await sendEmail({
            email: userData.email,
            subject,
            html
          });
          results.successful++;
        } catch (e) {
          console.error(`Failed to send ${campaignType} to ${userData.email}:`, e);
          results.failed++;
        }
      }
    });

    // Wait for all dispatches to finish
    await Promise.all(promises);

    return NextResponse.json({ 
        success: true, 
        message: `Admin ${campaignType} Broadcast Complete. Sent: ${results.successful}, Failed: ${results.failed}` 
    });

  } catch (error: any) {
    console.error("Broadcast Execution Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
