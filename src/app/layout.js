import './globals.css';

export const metadata = {
  title: 'Eunas Website!',
  description: 'buy Euna a coffee',
  openGraph: {
    title: 'Euna Jang',
    description: 'buy Euna a coffee',
    siteName: 'Eunas Website!',
    images: [
      {
        url: '/og2.png',
        width: 1200,
        height: 630,
        alt: 'Eunas Website!',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="break-keep scrollbar-hide">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
