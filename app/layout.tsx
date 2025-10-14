import type { Metadata } from 'next';
import '@/styles/globals.css';
import { siteConfig } from '@/lib/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Hope Haven Children\'s Home',
  description: 'Providing hope and building futures for children in need',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-white px-4 py-2 rounded"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NGO',
              name: siteConfig.name,
              url: siteConfig.siteUrl,
              email: siteConfig.email,
              telephone: siteConfig.phone,
              address: {
                '@type': 'PostalAddress',
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.city,
                addressRegion: siteConfig.address.province,
                postalCode: siteConfig.address.postalCode,
                addressCountry: siteConfig.address.country,
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
