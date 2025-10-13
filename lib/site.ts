export const siteConfig = {
  name: process.env.NEXT_PUBLIC_ORG_NAME || "Hope Haven Children's Home",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  email: process.env.NEXT_PUBLIC_ORG_EMAIL || 'info@hopehaven.example',
  phone: process.env.NEXT_PUBLIC_ORG_PHONE || '(000) 000-0000',
  registration: process.env.NEXT_PUBLIC_ORG_REGISTRATION || 'Pending',
  address: {
    street: process.env.NEXT_PUBLIC_ORG_ADDRESS || '123 Example Street',
    city: process.env.NEXT_PUBLIC_ORG_CITY || 'Toronto',
    province: process.env.NEXT_PUBLIC_ORG_PROVINCE || 'ON',
    postalCode: process.env.NEXT_PUBLIC_ORG_POSTAL || 'A1A 1A1',
    country: process.env.NEXT_PUBLIC_ORG_COUNTRY || 'Canada',
  },
  donate: {
    canadahelps:
      process.env.NEXT_PUBLIC_DONATE_CANADAHELPS_URL ||
      'https://www.canadahelps.org/en/',
    paypal:
      process.env.NEXT_PUBLIC_DONATE_PAYPAL_URL ||
      'https://www.paypal.com/ca/fundraiser/charity/',
    stripe:
      process.env.NEXT_PUBLIC_DONATE_STRIPE_URL ||
      'https://donate.stripe.com/test_placeholder',
  },
};

export type SiteConfig = typeof siteConfig;
