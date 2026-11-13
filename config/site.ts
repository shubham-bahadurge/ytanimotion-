// Single source of truth for public business and instructor details.
// Replace TODO values with verified information before production launch.
export const siteConfig = {
  businessName: "SHUBHIII",
  businessLegalName: "", // TODO: Add your registered legal business name.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://shubhiii-course-platform.vercel.app",
  supportEmail: "", // TODO: Add the official support email address.
  businessAddress: "", // TODO: Add the registered/business address, if required.
  trustLine: "Secure checkout · Course access after successful payment · Clear refund terms",
  showTestimonials: false, // Enable only after genuine, permission-approved reviews are ready.
  paymentProvider: "Stripe", // Hosted payment processor for checkout.
  accessType: "lifetime", // Course access type (TODO: Confirm lifetime vs time-limited).
  refundWindow: "TODO", // TODO: Specify the refund window (number of days).
  refundEligibility: "TODO", // TODO: Specify refund eligibility rules.
  instructor: {
    name: "TODO: Add the instructor's real name",
    bio: "TODO: Add an accurate instructor biography based on verified experience.",
    photoPath: "", // TODO: Add a permission-cleared local image path or public image URL.
    photoAlt: "TODO: Describe the instructor photo when one is added.",
    credentials: [
      "TODO: Add a verifiable creator-education credential.",
      "TODO: Add real professional or teaching experience.",
      "TODO: Add a relevant verified project or qualification."
    ]
  },
  social: {
    youtube: "", // TODO: Add the official SHUBHIII YouTube URL.
    instagram: "" // TODO: Add the official SHUBHIII Instagram URL.
  }
} as const;
