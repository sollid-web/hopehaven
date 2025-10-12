import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { ChildCard } from '@/components/ChildCard';
import childrenData from '@/content/children.json';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />

      <section className="section">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold text-center mb-4">Our Story</h2>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
            For over a decade, Hope Haven has been a sanctuary for children who need 
            a safe and loving home. We provide education, healthcare, and emotional 
            support to help each child reach their full potential. Our dedicated team 
            of caregivers and volunteers work tirelessly to ensure every child feels 
            valued, protected, and empowered to dream big.
          </p>

          <h3 className="text-2xl font-bold text-center mb-8">Meet Some of Our Children</h3>
          <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mb-8 text-center">
            <p className="text-sm text-yellow-200">
              <strong>Important:</strong> Photos are representative images for privacy protection. 
              Names are shown as initials only. No identifiable child information is displayed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {childrenData.children.map((child) => (
              <ChildCard
                key={child.id}
                name={child.name}
                age={child.age}
                note={child.note}
                photoUrl={child.photoUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
