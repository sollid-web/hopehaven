import Link from 'next/link';
export const metadata = {
  title: 'Caregivers & Volunteers | Hope Haven',
  description:
    'Learn about caregiver roles, volunteer opportunities, and how you can support children at Hope Haven.',
};
import { ExternalLink, Heart, Users, Clock } from 'lucide-react';

export default function CaregiversPage() {
  return (
    <div className="section">
      <div className="container-narrow max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
        
        <p className="text-lg text-gray-300 mb-8">
          Hope Haven is always looking for compassionate individuals to join our 
          team as caregivers, volunteers, and support staff. Your dedication can 
          make a lasting difference in a child's life.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="card text-center">
            <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Caregivers</h3>
            <p className="text-gray-400 text-sm">
              Full-time positions providing daily care and support
            </p>
          </div>

          <div className="card text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Volunteers</h3>
            <p className="text-gray-400 text-sm">
              Part-time help with activities, tutoring, and events
            </p>
          </div>

          <div className="card text-center">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
            <p className="text-gray-400 text-sm">
              We accommodate various schedules and commitments
            </p>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="text-2xl font-semibold mb-4">What We Look For</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Passion for child welfare and development</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Patience, empathy, and excellent communication skills</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Background checks and reference verification required</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Relevant experience or training (preferred but not required)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Commitment to our values of safety, respect, and dignity</span>
            </li>
          </ul>
        </div>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">Ready to Make a Difference?</h3>
          <p className="text-gray-300 mb-4">
            Submit your application through our online form. We'll review your 
            information and reach out to discuss opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/caregivers/volunteer" className="btn">
              Apply to Volunteer
            </Link>
            <a
              href="https://forms.google.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              External Application
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
