export const metadata = {
  title: 'Terms of Use | Hope Haven',
  description: 'Terms and acceptable use for the Hope Haven website.',
};

export default function TermsPage() {
  return (
    <div className="section">
      <div className="container-narrow max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Terms of Use</h1>
        <div className="prose prose-invert max-w-none text-gray-300">
          <p>
            This website is provided for informational purposes. By using it, you agree
            not to misuse the site, attempt to breach security, or submit unlawful content.
          </p>
          <p>
            Links to third-party services (e.g., donation platforms) are provided as a
            convenience. Their terms and privacy policies apply.
          </p>
        </div>
      </div>
    </div>
  );
}
