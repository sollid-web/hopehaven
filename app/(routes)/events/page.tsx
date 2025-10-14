import type { Metadata } from 'next';
import eventsData from '@/content/events.json';
import { CalendarDays, MapPin, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Events | Hope Haven',
  description: 'Join our upcoming events and community initiatives across the GTA.',
};

export default function EventsPage() {
  const { events } = eventsData as unknown as {
    events: Array<{
      id: number;
      title: string;
      date: string;
      time: string;
      location: string;
      description: string;
      ctaUrl?: string;
    }>;
  };

  return (
    <div className="section">
      <div className="container-narrow max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Events</h1>
        <p className="text-lg text-gray-300 mb-8">
          Connect with our community and support the mission. RSVP or learn more below.
        </p>

        <div className="space-y-6">
          {events.map((e) => (
            <div key={e.id} className="card">
              <h3 className="text-xl font-semibold mb-2">{e.title}</h3>
              <div className="text-sm text-gray-300 flex flex-wrap gap-4 mb-3">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-primary" /> {e.date} · {e.time}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" /> {e.location}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{e.description}</p>
              {e.ctaUrl && (
                <a href={e.ctaUrl} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center">
                  <ExternalLink className="mr-2 h-4 w-4" /> RSVP / Learn More
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
