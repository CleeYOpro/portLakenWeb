import { describe, it, expect } from "vitest";
import { validateStep, validateImageFile, FormData } from "../lib/validateSubmitForm";

// Helpers to build minimal valid FormData per step
const baseFormData: FormData = {
  resourceTitle: "Port Laken Food Bank",
  category: "food",
  topic: "support",
  tags: "free",
  shortDescription: "A community food bank for residents.",
  fullDescription:
    "The Port Laken Food Bank provides free groceries and meals to residents in need every week.",
  address: "123 Main St",
  city: "Port Laken",
  state: "CA",
  zipCode: "90210",
  phone: "555-1234",
  email: "contact@foodbank.org",
  website: "https://foodbank.org",
  operatingHours: "Mon-Fri 9am-5pm",
  submitterName: "Jane Doe",
  submitterEmail: "jane@example.com",
  submitterRelation: "volunteer",
  agreeToTerms: true,
};

function data(overrides: Partial<FormData> = {}): FormData {
  return { ...baseFormData, ...overrides };
}

// ── Step 1 ──────────────────────────────────────────────────────────────────

describe("validateStep — Step 1", () => {
  it("returns error when resourceTitle is empty", () => {
    const errors = validateStep(1, data({ resourceTitle: "" }));
    expect(errors.resourceTitle).toBeTruthy();
  });

  it("returns error when category is empty", () => {
    const errors = validateStep(1, data({ category: "" }));
    expect(errors.category).toBeTruthy();
  });

  it("returns error when shortDescription is shorter than 20 chars", () => {
    const errors = validateStep(1, data({ shortDescription: "Too short" }));
    expect(errors.shortDescription).toBeTruthy();
  });

  it("returns error when fullDescription is shorter than 50 chars", () => {
    const errors = validateStep(1, data({ fullDescription: "Too short" }));
    expect(errors.fullDescription).toBeTruthy();
  });

  it("returns no errors when all step-1 fields are valid", () => {
    const errors = validateStep(1, data());
    expect(Object.keys(errors)).toHaveLength(0);
  });
});

// ── Step 2 ──────────────────────────────────────────────────────────────────

describe("validateStep — Step 2", () => {
  it("returns error when address is empty", () => {
    const errors = validateStep(2, data({ address: "" }));
    expect(errors.address).toBeTruthy();
  });

  it("returns error when email format is invalid", () => {
    const errors = validateStep(2, data({ email: "not-an-email" }));
    expect(errors.email).toBeTruthy();
  });

  it("returns no errors when all step-2 fields are valid", () => {
    const errors = validateStep(2, data());
    expect(Object.keys(errors)).toHaveLength(0);
  });
});

// ── Step 3 ──────────────────────────────────────────────────────────────────

describe("validateStep — Step 3", () => {
  it("returns error when submitterName is empty", () => {
    const errors = validateStep(3, data({ submitterName: "" }));
    expect(errors.submitterName).toBeTruthy();
  });

  it("returns error when agreeToTerms is false", () => {
    const errors = validateStep(3, data({ agreeToTerms: false }));
    expect(errors.agreeToTerms).toBeTruthy();
  });

  it("returns no errors when all step-3 fields are valid", () => {
    const errors = validateStep(3, data());
    expect(Object.keys(errors)).toHaveLength(0);
  });
});

// ── validateImageFile ────────────────────────────────────────────────────────

function makeFile(name: string, type: string, sizeBytes: number): File {
  // File constructor: new File(parts, name, options)
  const blob = new Uint8Array(sizeBytes);
  return new File([blob], name, { type });
}

describe("validateImageFile", () => {
  it("returns an error for an unsupported type (image/gif)", () => {
    const file = makeFile("anim.gif", "image/gif", 1024);
    expect(validateImageFile(file)).toBeTruthy();
  });

  it("returns an error for a file exceeding 5 MB", () => {
    const file = makeFile("big.jpg", "image/jpeg", 6 * 1024 * 1024);
    expect(validateImageFile(file)).toBeTruthy();
  });

  it("returns null for a valid JPEG under 5 MB", () => {
    const file = makeFile("photo.jpg", "image/jpeg", 1 * 1024 * 1024);
    expect(validateImageFile(file)).toBeNull();
  });

  it("returns null for a valid PNG under 5 MB", () => {
    const file = makeFile("image.png", "image/png", 2 * 1024 * 1024);
    expect(validateImageFile(file)).toBeNull();
  });

  it("returns null for a valid WebP under 5 MB", () => {
    const file = makeFile("image.webp", "image/webp", 3 * 1024 * 1024);
    expect(validateImageFile(file)).toBeNull();
  });
});
