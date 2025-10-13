export const metadata = {
  title: 'FAQ | Hope Haven',
  description: 'Frequently asked questions about Hope Haven and how to get involved.',
};

const faqs = [
  {
    q: 'Do you show real photos of children?',
    a: 'No. For privacy and safeguarding, we only use representative stock images. Child names are anonymized as initials.'
  },
  {
    q: 'Are donations tax‑deductible?',
    a: 'Yes. Donations processed through our listed platforms provide official tax receipts as permitted by law.'
  },
  {
    q: 'How can I volunteer?',
    a: 'Visit the Caregivers page to submit a volunteer application. All volunteers complete background checks.'
  },
  {
    q: 'Do you manage adoptions directly?',
    a: 'Adoptions are coordinated exclusively through licensed agencies. Start on our Adoptions page for guidance.'
  }
];

export default function FAQPage() {
  return (
    <div className="section">
      <div className="container-narrow max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <details key={idx} className="card">
              <summary className="cursor-pointer text-lg font-semibold">{item.q}</summary>
              <p className="text-gray-300 mt-2">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
