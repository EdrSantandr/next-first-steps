import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About page Title',
 description: 'About page Description',
 keywords: ['About page', 'Informacion', 'Metatags que necesitamos'],
};

export default function AboutPage() {
  return (
    <span className="text-7xl">About Page</span>
  );
}