import Link from 'next/link';

export const metadata = {
  title: 'Policies | Hope Haven',
  description: 'Privacy, safeguarding, and terms of use for Hope Haven.',
};

export default function PoliciesIndex() {
  const items = [
    { href: '/policies/privacy', label: 'Privacy Policy' },
    { href: '/policies/safeguarding', label: 'Child Safeguarding Policy' },
    { href: '/policies/terms', label: 'Terms of Use' },
  ];
  return (
    <div className="section">
      <div className="container-narrow max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Policies</h1>
        <ul className="space-y-3">
          {items.map((i) => (
            <li key={i.href}>
              <Link className="btn-outline" href={i.href}>{i.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
