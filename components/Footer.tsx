import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-card">
      <div className="container-narrow py-8">
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
          <div>
            <p className="font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-1">{siteConfig.address.street}</p>
            <p>
              {siteConfig.address.city}, {siteConfig.address.province} {siteConfig.address.postalCode}
            </p>
            <p>{siteConfig.address.country}</p>
          </div>
          <div>
            <p>Phone: {siteConfig.phone}</p>
            <p>Email: {siteConfig.email}</p>
            <p>Registration: {siteConfig.registration}</p>
          </div>
          <div>
            <ul className="space-y-1">
              <li><Link className="hover:text-primary" href="/policies">Policies</Link></li>
              <li><Link className="hover:text-primary" href="/policies/privacy">Privacy</Link></li>
              <li><Link className="hover:text-primary" href="/policies/safeguarding">Safeguarding</Link></li>
              <li><Link className="hover:text-primary" href="/policies/terms">Terms</Link></li>
              <li><Link className="hover:text-primary" href="/visit">Visit Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-muted mt-6">
          <p className="mb-2">© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>
            Photos are representative images from Unsplash and Pexels. No identifiable child information is displayed.
          </p>
        </div>
      </div>
    </footer>
  );
}
