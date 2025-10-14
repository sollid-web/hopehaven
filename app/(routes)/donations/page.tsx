import { ExternalLink, Heart, DollarSign, CreditCard } from 'lucide-react';
export const metadata = {
  title: 'Donate | Hope Haven',
  description:
    'Support children in Canada through secure donations via CanadaHelps, PayPal Giving, or Stripe. Tax receipts provided.',
};
import { siteConfig } from '@/lib/site';

export default function DonationsPage() {
  return (
    <div className="section">
      <div className="container-narrow max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Support Our Mission</h1>
        
        <p className="text-lg text-gray-300 mb-12">
          Your generous donations help us provide food, shelter, education, and 
          healthcare to children in need. Every contribution makes a real difference 
          in a child's life.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Choose Your Payment Method</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="card">
            <Heart className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">CanadaHelps</h3>
            <p className="text-gray-400 text-sm mb-4">
              Secure donations through Canada's trusted giving platform. 
              Receive instant tax receipts.
            </p>
            <a
              href={siteConfig.donate.canadahelps}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Donate via CanadaHelps
            </a>
          </div>

          <div className="card">
            <DollarSign className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">PayPal Giving</h3>
            <p className="text-gray-400 text-sm mb-4">
              Quick and easy donations through PayPal. 100% of your 
              donation goes to Hope Haven.
            </p>
            <a
              href={siteConfig.donate.paypal}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Donate via PayPal
            </a>
          </div>

          <div className="card">
            <CreditCard className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Stripe</h3>
            <p className="text-gray-400 text-sm mb-4">
              Secure credit card processing with detailed reporting 
              and recurring donation options.
            </p>
            <a
              href={siteConfig.donate.stripe}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Donate via Stripe
            </a>
          </div>
        </div>

        <div className="card bg-blue-900/20 border-blue-700/50">
          <h3 className="text-xl font-semibold mb-4">How Your Donation Helps</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <p className="font-semibold text-white mb-2">$50</p>
              <p className="text-sm">Provides meals for one child for a week</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">$100</p>
              <p className="text-sm">Covers school supplies for one child for a year</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">$250</p>
              <p className="text-sm">Funds medical care and health checkups</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">$500</p>
              <p className="text-sm">Supports educational programs and tutoring</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-400">
          <p>
            Hope Haven is a registered charity. All donations are tax-deductible 
            to the extent permitted by law. Our charity registration number will 
            appear on your tax receipt.
          </p>
        </div>
      </div>
    </div>
  );
}
