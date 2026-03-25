export interface FormData {
  resourceTitle: string;
  category: string;
  topic: string;
  tags: string;
  shortDescription: string;
  fullDescription: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  website: string;
  operatingHours: string;
  submitterName: string;
  submitterEmail: string;
  submitterRelation: string;
  agreeToTerms: boolean;
}

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_IMAGE_SIZE_MB = 5;

/**
 * Validates the fields for a given step.
 * Returns an errors object — empty means valid.
 */
export function validateStep(step: number, formData: FormData): Record<string, string> {
  const errors: Record<string, string> = {};

  if (step === 1) {
    if (!formData.resourceTitle.trim()) {
      errors.resourceTitle = "Resource title is required";
    }
    if (!formData.category) {
      errors.category = "Please select a category";
    }
    if (!formData.shortDescription.trim()) {
      errors.shortDescription = "Short description is required";
    } else if (formData.shortDescription.length < 20) {
      errors.shortDescription = "Short description must be at least 20 characters";
    }
    if (!formData.fullDescription.trim()) {
      errors.fullDescription = "Full description is required";
    } else if (formData.fullDescription.length < 50) {
      errors.fullDescription = "Full description must be at least 50 characters";
    }
  }

  if (step === 2) {
    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }
    if (!formData.zipCode.trim()) {
      errors.zipCode = "ZIP code is required";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
  }

  if (step === 3) {
    if (!formData.submitterName.trim()) {
      errors.submitterName = "Your name is required";
    }
    if (!formData.submitterEmail.trim()) {
      errors.submitterEmail = "Your email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.submitterEmail)) {
      errors.submitterEmail = "Please enter a valid email";
    }
    if (!formData.submitterRelation) {
      errors.submitterRelation = "Please select your relation";
    }
    if (!formData.agreeToTerms) {
      errors.agreeToTerms = "You must agree to the guidelines";
    }
  }

  return errors;
}

/**
 * Validates an image file for type and size.
 * Returns an error string, or null if valid.
 */
export function validateImageFile(file: File): string | null {
  if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
    return "Only JPEG, PNG, and WebP images are accepted.";
  }
  if (file.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
    return `Image must be smaller than ${MAX_IMAGE_SIZE_MB} MB.`;
  }
  return null;
}
