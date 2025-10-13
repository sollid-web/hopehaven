export const metadata = {
  title: 'Programs | Hope Haven',
  description: 'Overview of Hope Haven programs supporting children\'s development.',
};

export default function ProgramsPage() {
  return (
    <div className="section">
      <div className="container-narrow max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Our Programs</h1>
        <p className="text-lg text-gray-300 mb-10">
          We design age‑appropriate, trauma‑informed programs focused on education,
          health, and social development. Below is a snapshot of ongoing initiatives.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Education Support</h3>
            <p className="text-gray-300 text-sm">
              Enrollment in local schools, tutoring, and access to learning
              materials to ensure every child stays on track.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Health & Wellness</h3>
            <p className="text-gray-300 text-sm">
              Regular checkups, dental care, vaccinations, and counseling via
              licensed community providers.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Life Skills</h3>
            <p className="text-gray-300 text-sm">
              Practical skills including nutrition, hygiene, financial literacy,
              and digital safety.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Recreation</h3>
            <p className="text-gray-300 text-sm">
              Sports, arts, and community activities that foster teamwork and
              creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
