import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SMK Wikrama Bogor',
  description: 'Platform pembelajaran interaktif SMK Wikrama Bogor.',
  icons: {
    icon: [
      { url: 'https://spmb.smkwikrama.sch.id/assets/landing%20page/images/logo.png?v=5', type: 'image/png' },
    ],
    shortcut: 'https://spmb.smkwikrama.sch.id/assets/landing%20page/images/logo.png?v=5',
    apple: 'https://spmb.smkwikrama.sch.id/assets/landing%20page/images/logo.png?v=5',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <meta name="referrer" content="no-referrer" />
        {/* Manual override links with cache buster */}
        <link rel="icon" type="image/png" href="https://spmb.smkwikrama.sch.id/assets/landing%20page/images/logo.png?v=5" sizes="any" />
        <link rel="apple-touch-icon" href="https://spmb.smkwikrama.sch.id/assets/landing%20page/images/logo.png?v=5" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
