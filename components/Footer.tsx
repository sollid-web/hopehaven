export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-card">
      <div className="container-narrow py-8">
        <div className="text-center text-sm text-gray-400">
          <p className="mb-2">
            © {currentYear} Hope Haven Children's Home. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Photos are representative images from Unsplash and Pexels for demonstration purposes only.
            No identifiable child information is displayed.
          </p>
        </div>
      </div>
    </footer>
  );
}
