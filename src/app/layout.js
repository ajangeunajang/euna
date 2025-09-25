import './globals.css';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
      <head>
        <link
          href="/FavoritMonoStd-Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
