import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section">
      <div className="container-narrow text-center">
        <h1 className="text-5xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-300 mb-8">The page you are looking for doesn\'t exist.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn">Go Home</Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
