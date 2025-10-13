import { siteConfig } from '@/lib/site';

export const metadata = {
  title: 'Visit Us | Hope Haven',
  description: 'Find our location and contact information.',
};

export default function VisitPage() {
  const addr = siteConfig.address;
  const addressLine = `${addr.street}, ${addr.city}, ${addr.province} ${addr.postalCode}, ${addr.country}`;
  const mapQuery = encodeURIComponent(addressLine);
  return (
    <div className="section">
      <div className="container-narrow max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Visit Us</h1>
        <div className="card mb-6">
          <p className="text-gray-300">{addressLine}</p>
          <p className="text-gray-300 mt-2">Phone: {siteConfig.phone}</p>
          <p className="text-gray-300">Email: {siteConfig.email}</p>
          <a
            className="btn mt-4 inline-block"
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
        <p className="text-sm text-gray-400">
          Please schedule your visit in advance to ensure the safety and privacy of children in our care.
        </p>
      </div>
    </div>
  );
}
