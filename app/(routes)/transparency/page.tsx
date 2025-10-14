import { FileText, Shield, BarChart3, Lock } from 'lucide-react';
export const metadata = {
  title: 'Transparency & Accountability | Hope Haven',
  description:
    'Our commitments to impact reporting, audited financials, safeguarding, and privacy to earn your trust.',
};

export default function TransparencyPage() {
  return (
    <div className="section">
      <div className="container-narrow max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Transparency & Accountability</h1>
        
        <p className="text-lg text-gray-300 mb-12">
          We are committed to operating with the highest standards of transparency, 
          accountability, and ethical conduct. Here's how we ensure your trust is 
          well-placed.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="card">
            <BarChart3 className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Impact Reporting</h3>
            <p className="text-gray-400 text-sm">
              We publish quarterly impact reports detailing how donations are used 
              and the outcomes we achieve for the children in our care.
            </p>
          </div>

          <div className="card">
            <FileText className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Audited Financials</h3>
            <p className="text-gray-400 text-sm">
              Our financial statements are independently audited annually and 
              available for public review upon request.
            </p>
          </div>

          <div className="card">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Child Safeguarding</h3>
            <p className="text-gray-400 text-sm">
              We maintain strict safeguarding policies with regular staff training 
              and background checks for all personnel and volunteers.
            </p>
          </div>

          <div className="card">
            <Lock className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Privacy Protection</h3>
            <p className="text-gray-400 text-sm">
              Children's personal information is strictly protected. All photos 
              and stories shared publicly are anonymized and use representative images.
            </p>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Commitments</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>
                <strong className="text-white">Financial Stewardship:</strong> At least 85% of 
                all donations go directly to programs supporting children.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>
                <strong className="text-white">Regulatory Compliance:</strong> We comply with all 
                provincial and federal regulations for child welfare organizations.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>
                <strong className="text-white">Independent Oversight:</strong> Our board includes 
                independent members with expertise in child welfare and governance.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>
                <strong className="text-white">Open Communication:</strong> We maintain open lines 
                of communication with donors, partners, and the community.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Request Information</h3>
          <p className="text-gray-300 mb-4">
            Want to review our annual report, financial statements, or policies? 
            Contact us and we'll be happy to provide the information you need.
          </p>
          <a href="/contact" className="btn">
            Contact Us
          </a>
        </div>

        <div className="mt-8 text-sm text-gray-400">
          <p className="mb-2">
            <strong className="text-white">Charitable Registration:</strong> Hope Haven is a 
            registered Canadian charity (CRA Registration: Pending)
          </p>
          <p>
            <strong className="text-white">Accreditation:</strong> We adhere to standards set by 
            provincial child welfare authorities and work with licensed adoption agencies.
          </p>
        </div>
      </div>
    </div>
  );
}
