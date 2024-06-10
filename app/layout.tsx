import type { Metadata } from '../node_modules/next/types';
import Head from '../node_modules/next/head';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nike ecommerce devMode',
  description: 'Nike ecommerce',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
