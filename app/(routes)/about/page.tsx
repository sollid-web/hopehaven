export const metadata = {
  title: 'About | Hope Haven',
  description: 'About Hope Haven Children\'s Home, our mission, values, and approach.',
};

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container-narrow max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">About Hope Haven</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-6">
            Hope Haven is a children\'s home in Canada dedicated to providing a safe,
            stable, and nurturing environment for children who cannot live with their
            families. We focus on education, health, and emotional well‑being to help
            every child build a confident, independent future.
          </p>
          <div className="card mb-8">
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-300">
              To provide loving care, quality education, and holistic support so that
              children can grow, thrive, and realize their full potential.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>Safety, dignity, and respect</li>
                <li>Child‑centered decision making</li>
                <li>Accountability and transparency</li>
                <li>Community partnership</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">What We Provide</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>Secure housing and nutritious meals</li>
                <li>School enrollment and tutoring</li>
                <li>Healthcare and counseling access</li>
                <li>Life skills and extracurriculars</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
