export const metadata = {
  title: 'Privacy Policy | Hope Haven',
  description: 'How we collect, use, and protect personal information at Hope Haven.',
};

export default function PrivacyPolicy() {
  return (
    <div className="section">
      <div className="container-narrow max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-gray-300">
          <p>
            We follow Canadian privacy laws (including PIPEDA where applicable). We do not
            publish personally identifiable information (PII) of children. Representative
            images are used for all public materials.
          </p>
          <h2 className="text-white">Contact Form</h2>
          <p>
            Information submitted via the contact form is transmitted to our email inbox
            for the purpose of responding. It is not stored in a database.
          </p>
          <h2 className="text-white">Your Rights</h2>
          <p>
            You may request access to or deletion of your personal information by
            contacting us via the address on our Contact page.
          </p>
        </div>
      </div>
    </div>
  );
}
