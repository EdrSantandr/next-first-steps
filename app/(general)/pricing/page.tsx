import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Princing SEO Title',
 description: 'Pricing Page Description',
 keywords: ['Pricing', 'Cost', 'Metatags for pricing page'],
};

export default function PricingPage() {
  return (
    <>
        <span className="text-7xl">Pricing Page</span>
    </>
  );
}