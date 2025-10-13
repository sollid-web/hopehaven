export const metadata = {
  title: 'Child Safeguarding | Hope Haven',
  description: 'Our commitment to child safety and safeguarding measures.',
};

export default function SafeguardingPolicy() {
  return (
    <div className="section">
      <div className="container-narrow max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Child Safeguarding Policy</h1>
        <div className="prose prose-invert max-w-none text-gray-300">
          <ul className="list-disc pl-6 space-y-2">
            <li>Background checks for all staff and volunteers</li>
            <li>Mandatory reporting procedures and training</li>
            <li>Privacy-by-default for all public communications</li>
            <li>Clear codes of conduct and supervision ratios</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
