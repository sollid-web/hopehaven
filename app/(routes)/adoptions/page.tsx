import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function AdoptionsPage() {
  return (
    <div className="section">
      <div className="container-narrow max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Adoption Process</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-6">
            Hope Haven works exclusively with accredited adoption agencies to ensure 
            the highest standards of care and legal compliance. We do not handle 
            adoption applications directly.
          </p>

          <div className="card mb-8">
            <h2 className="text-2xl font-semibold mb-4">How to Begin</h2>
            <ol className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">1. Contact an Accredited Agency:</strong> Work with 
                a licensed adoption agency in your province or territory.
              </li>
              <li>
                <strong className="text-white">2. Complete Home Study:</strong> All prospective 
                parents must complete a thorough home study process.
              </li>
              <li>
                <strong className="text-white">3. Submit Inquiry:</strong> Your agency will 
                coordinate with Hope Haven on your behalf.
              </li>
              <li>
                <strong className="text-white">4. Matching Process:</strong> Our team works to 
                find the best match for each child's needs.
              </li>
            </ol>
          </div>

          <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-3">Questions About Adoption?</h3>
            <p className="text-gray-300 mb-4">
              Fill out our preliminary inquiry form, and we'll connect you with 
              appropriate resources and accredited partner agencies.
            </p>
            <a
              href="https://forms.google.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Open Inquiry Form
            </a>
          </div>

          <div className="text-sm text-gray-400">
            <p>
              Hope Haven is committed to child welfare and follows all provincial and 
              federal adoption regulations. All adoptions are processed through licensed 
              agencies with proper oversight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
