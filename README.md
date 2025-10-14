# Hope Haven Children's Home

A Next.js 14 brochure website for Hope Haven Children's Home, built with no database and featuring an email-only contact form.

## Features

- **Public brochure site** - No authentication, no user accounts, no data storage
- **Contact form** - Sends emails via Resend API (serverless function), no persistence
- **External donations** - Links to CanadaHelps, PayPal Giving, and Stripe payment processors
- **Ethical imagery** - Uses representative photos from Unsplash/Pexels with no identifiable children
- **Accessible design** - Clean, responsive, dark theme with good contrast
- **Privacy-focused** - All child information is anonymized (initials only)
- **Children listing page** - Browse anonymized profiles at `/children` sourced from `content/children.json`

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** TailwindCSS 3
- **Icons:** lucide-react
- **Utilities:** clsx, tailwind-merge
- **Email:** Resend API (REST API, no SDK)

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm (or npm/yarn)
- Resend API key (for contact form functionality)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/radical-workspace/hopehaven.git
cd hopehaven
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your credentials:
```
RESEND_API_KEY=your_resend_api_key_here
CONTACT_TO_EMAIL=your_email@example.com
```

4. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
pnpm build
```

This will create an optimized production build with zero type errors.

### Running Production Build Locally

```bash
pnpm start
```

## Environment Variables

The following environment variables are required:

- `RESEND_API_KEY` - Your Resend API key for sending contact form emails
- `CONTACT_TO_EMAIL` - The email address where contact form submissions should be sent

**Note:** These are only needed for the contact form to work. All other pages will function without them.

## Deployment

This site is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel's dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
4. Deploy!

## Project Structure

```
hopehaven/
├── app/                        # Next.js 14 App Router
│   ├── (routes)/              # Route groups
│   │   ├── adoptions/         # Adoption information
│   │   ├── children/          # Anonymized children profiles (/children)
│   │   ├── caregivers/        # Caregiver/volunteer recruitment
│   │   ├── contact/           # Contact form
│   │   ├── donations/         # Donation options
│   │   └── transparency/      # Transparency & accountability
│   ├── api/
│   │   └── contact/           # Contact form API route
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/                 # React components
│   ├── ChildCard.tsx          # Child profile card
│   ├── Footer.tsx             # Site footer
│   ├── Header.tsx             # Site header/navigation
│   ├── Hero.tsx               # Hero section
│   └── Stats.tsx              # Statistics display
├── content/                    # Static content
│   ├── children.json          # Sample child profiles (anonymized)
│   └── stats.json             # Impact statistics
├── lib/                        # Utilities
│   └── utils.ts               # Helper functions (cn)
├── public/                     # Static assets
│   └── images/                # Image files
├── styles/
│   └── globals.css            # Global styles and Tailwind
└── ...config files
```

## Design Decisions

### No Database
This site intentionally has no database or data persistence layer. All content is static or handled by external services:
- Content is stored in JSON files
- Contact form sends emails directly via Resend API
- Donations are processed by external payment processors (CanadaHelps, PayPal, Stripe)

### Privacy & Ethics
- All child photos are representative images from Unsplash/Pexels
- Child names are shown as initials only (e.g., "A.", "B.")
- No personally identifiable information is displayed
- Clear disclaimers on all pages with child information

### Children Data Source
The Children page reads from `content/children.json` and renders cards via `components/ChildCard.tsx`. If you update entries, keep details anonymized and use image hosts allowed in `next.config.mjs` (Unsplash/Pexels). To add another image host, update `images.remotePatterns` accordingly.

### External Services
- **Adoptions:** Handled by accredited adoption agencies (linked via Google Forms placeholder)
- **Donations:** Processed by trusted external platforms (CanadaHelps, PayPal, Stripe)
- **Contact:** Emails sent via Resend API, no form data is stored

## License

This project is for demonstration purposes. In a real-world scenario, ensure compliance with all applicable child welfare regulations and privacy laws.

## Acknowledgments

- Photos from [Unsplash](https://unsplash.com) and [Pexels](https://pexels.com)
- Icons from [Lucide](https://lucide.dev)
