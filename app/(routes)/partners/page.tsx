import type { Metadata } from 'next';
import partnersData from '@/content/partners.json';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Partners | Hope Haven',
  description: 'Our partners and supporters who help us provide care for children in Canada.',
};

export default function PartnersPage() {
  const { partners } = partnersData as unknown as {
    partners: Array<{
      id: number;
      name: string;
      url: string;
      logo: string;
      type?: string;
    }>;
  };

  return (
    <div className="section">
      <div className="container-narrow max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Our Partners</h1>
        <p className="text-lg text-gray-300 mb-8">
          We are grateful for the generous support of organizations and community partners who share our commitment
          to children’s safety, education, and wellbeing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {partners.map((p) => (
            <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer" className="card group">
              <div className="relative h-16 mb-4">
                <Image src={p.logo} alt={`${p.name} logo`} fill className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold">{p.name}</h3>
              {p.type && <p className="text-sm text-gray-400">{p.type}</p>}
              <span className="text-xs text-primary opacity-0 group-hover:opacity-100 mt-2 inline-block">Visit website →</span>
            </a>
          ))}
        </div>

        <div className="card mt-8">
          <h2 className="text-2xl font-semibold mb-2">Become a Partner</h2>
          <p className="text-gray-300 mb-4">
            Interested in partnering with Hope Haven? We collaborate with foundations, schools, healthcare providers,
            and local businesses to create meaningful impact.
          </p>
          <a href="/contact" className="btn">Contact Us</a>
        </div>
      </div>
    </div>
  );
}
