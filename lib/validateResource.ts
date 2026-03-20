const MIN_WORDS = 30;

/**
 * Checks if the description mentions at least one meaningful word from the title.
 * Strips common filler words before comparing.
 */
function descriptionMentionsTitle(title: string, description: string): boolean {
  const stopWords = new Set(["the", "a", "an", "of", "and", "or", "for", "in", "at", "to", "is", "are", "was", "were", "be", "been", "with", "on", "by", "as", "it", "its", "this", "that", "from", "center", "services", "service"]);
  const titleWords = title.toLowerCase().split(/\s+/).filter(w => w.length > 2 && !stopWords.has(w));
  const descLower = description.toLowerCase();
  return titleWords.some(w => descLower.includes(w));
}

export interface ValidationResult {
  approved: boolean;
  reason: string;
}

export function validateResource(data: {
  title: string;
  description: string;
  category: string;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
}): ValidationResult {
  const wordCount = data.description.trim().split(/\s+/).filter(Boolean).length;

  if (!data.title.trim()) {
    return { approved: false, reason: "Resource title is required." };
  }
  if (wordCount < MIN_WORDS) {
    return { approved: false, reason: `Description is too short. Please write at least ${MIN_WORDS} words (currently ${wordCount}).` };
  }
  if (!descriptionMentionsTitle(data.title, data.description)) {
    return { approved: false, reason: "Your description doesn't seem to relate to the resource title. Make sure the description mentions what the resource actually is." };
  }
  const hasContact = !!(data.phone || data.email || data.website || data.address);
  if (!hasContact) {
    return { approved: false, reason: "Please provide at least one way to contact or find this resource (phone, email, website, or address)." };
  }

  return { approved: true, reason: "Meets all requirements." };
}
