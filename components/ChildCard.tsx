import Image from 'next/image';

interface ChildCardProps {
  name: string;
  age: number;
  note: string;
  photoUrl: string;
}

export function ChildCard({ name, age, note, photoUrl }: ChildCardProps) {
  return (
    <div className="card">
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <Image
          src={photoUrl}
          alt={`Child ${name}`}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">
        {name}, age {age}
      </h3>
      <p className="text-gray-400 text-sm">
        {note}
      </p>
    </div>
  );
}
