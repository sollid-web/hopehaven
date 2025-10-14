export const metadata = {
  title: 'Volunteer with Us | Hope Haven',
  description:
    'Apply to volunteer at Hope Haven. Help with activities, tutoring, events, and more. Background checks required.',
};

import { VolunteerForm } from './volunteer-form';

export default function VolunteerPage() {
  return (
    <div className="section">
      <div className="container-narrow max-w-2xl">
        <h1 className="text-4xl font-bold mb-6">Volunteer with Hope Haven</h1>
        <p className="text-gray-300 mb-8">
          Volunteers support children through activities, tutoring, meal prep, events, and more. All roles require
          reference checks and a vulnerable sector police check.
        </p>
        <VolunteerForm />
      </div>
    </div>
  );
}
