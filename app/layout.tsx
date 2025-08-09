import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const openSans = Open_Sans({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Orhanlar Dekorasyon | Ümraniye Alçı Boya, Alçıpan, Seramik ve Tadilat',
    template: '%s | Orhanlar Dekorasyon'
  },
  description: 'Ümraniye ve İstanbul genelinde alçı boya, alçıpan, seramik ve anahtar teslim tadilat hizmetleri. Kaliteli işçilik, uygun fiyat ve zamanında teslim.',
  keywords: 'Ümraniye boyacı, alçı boya, alçıpan, seramik ustası, tadilat, renovasyon, İstanbul',
  authors: [{ name: 'Orhanlar Dekorasyon' }],
  creator: 'Orhanlar Dekorasyon',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://orhanlar-dekorasyon.com',
    title: 'Orhanlar Dekorasyon | Ümraniye Alçı Boya ve Tadilat',
    description: 'Ümraniye ve İstanbul genelinde profesyonel alçı boya, alçıpan, seramik ve tadilat hizmetleri.',
    siteName: 'Orhanlar Dekorasyon',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orhanlar Dekorasyon | Ümraniye Alçı Boya ve Tadilat',
    description: 'Profesyonel alçı boya, alçıpan, seramik ve tadilat hizmetleri.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${openSans.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}