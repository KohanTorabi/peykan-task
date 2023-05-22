import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
