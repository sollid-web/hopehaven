import Image from 'next/image';

export const metadata = {
  title: 'Gallery | Hope Haven',
  description: 'Representative imagery reflecting everyday life and community at Hope Haven.',
};

const images = [
  'https://images.pexels.com/photos/4474010/pexels-photo-4474010.jpeg?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=800&fit=crop',
  'https://images.pexels.com/photos/8490111/pexels-photo-8490111.jpeg?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1541534401786-2077eed87a16?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=800&fit=crop',
  'https://images.pexels.com/photos/6623781/pexels-photo-6623781.jpeg?w=800&h=800&fit=crop',
];

export default function GalleryPage() {
  return (
    <div className="section">
      <div className="container-narrow">
        <h1 className="text-4xl font-bold mb-6">Gallery</h1>
        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mb-8">
          <p className="text-sm text-yellow-200">
            For privacy and safeguarding, photos shown here are representative stock images from Unsplash/Pexels and do not depict identifiable children in our care.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
              <Image src={src} alt={`Representative image ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
