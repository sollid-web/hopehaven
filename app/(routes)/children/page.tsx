import type { Metadata } from 'next';
import { ChildCard } from '@/components/ChildCard';
import childrenData from '@/content/children.json';

export const metadata: Metadata = {
  title: 'Children | Hope Haven',
  description:
    'Learn about the wonderful children in our care. To protect privacy and safety, names and images are representative only.',
};

export default function ChildrenPage() {
  const { children } = childrenData as {
    children: Array<{
      id: number;
      name: string;
      age: number;
      note: string;
      photoUrl: string;
    }>;
  };

  return (
    <div className="section">
      <div className="container-narrow">
        <h1 className="text-4xl font-bold mb-6">Our Children</h1>
        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mb-8">
          <p className="text-sm text-yellow-200">
            For privacy and safeguarding, names and photos shown here are
            representative only and do not depict identifiable children in our
            care. We share interests and personality notes to celebrate each
            child while protecting their identity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {children.map((child) => (
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
    </div>
  );
}
