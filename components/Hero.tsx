import Link from 'next/link';
import Image from 'next/image';
import { Heart, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="section">
      <div className="container-narrow">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Providing Hope, <span className="text-primary">Building Futures</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Hope Haven Children's Home is dedicated to providing a safe, nurturing environment 
              for children in need. Through compassionate care and community support, we help 
              children build brighter futures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/donations" className="btn">
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Link>
              <Link href="/contact" className="btn-outline">
                <Mail className="mr-2 h-5 w-5" />
                Adoption Inquiry
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=800&fit=crop"
              alt="Children playing together"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
