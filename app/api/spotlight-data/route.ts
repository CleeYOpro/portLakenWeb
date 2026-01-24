import { NextResponse } from 'next/server';

// Spotlight data for the calendar section
const spotlightData = [
    {
        image: "https://cdn.pixabay.com/photo/2018/10/22/20/34/hamburg-3766309_960_720.jpg",
        title: "Harbor District",
        description: "Experience the vibrant waterfront culture and historic maritime heritage."
    },
    {
        image: "https://cdn.pixabay.com/photo/2023/04/16/15/00/port-7930392_640.jpg",
        title: "Port Activities",
        description: "Discover daily life at one of the region's most active ports."
    },
    {
        image: "https://cdn.pixabay.com/photo/2020/03/22/10/19/fog-4956588_960_720.jpg",
        title: "Misty Mornings",
        description: "Witness the serene beauty of Port Laken's early morning atmosphere."
    },
    {
        image: "https://cdn.pixabay.com/photo/2016/02/26/13/38/england-1224050_1280.jpg",
        title: "Historic Architecture",
        description: "Explore the timeless charm of our preserved historic buildings."
    },
    {
        image: "https://cdn.pixabay.com/photo/2023/05/03/12/25/boats-7967544_1280.jpg",
        title: "Sailing Community",
        description: "Join our thriving community of sailors and water sports enthusiasts."
    }
];

export async function GET() {
    return NextResponse.json(spotlightData);
}
