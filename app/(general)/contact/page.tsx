import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact Page title',
 description: 'Contact Page description',
 keywords: ['Contact', 'Get in touch', 'Metatags for contact page'],
};

export default function ContactPage() {
  return (
    <>
        <span className="text-7xl">Contact Page</span>
    </>
  );
}