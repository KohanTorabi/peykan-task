import { Metadata } from 'next';
import './globals.css';
import { strings } from '@/resources/strings';

export const metadata: Metadata = {
  title: strings.home_page_title,
  description: strings.home_page_description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
