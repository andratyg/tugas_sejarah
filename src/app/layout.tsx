import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SMK Wikrama Bogor',
  description: 'Platform pembelajaran interaktif SMK Wikrama Bogor.',
  icons: {
    icon: [
      {
        url: 'https://spmb.smkwikrama.sch.id/assets/landing%20page/images/logo.png?v=2',
        href: 'https://spmb.smkwikrama.sch.id/assets/landing%20page/images/logo.png?v=2',
      },
    ],
    shortcut: 'https://spmb.smkwikrama.sch.id/assets/landing%20page/images/logo.png?v=2',
    apple: 'https://spmb.smkwikrama.sch.id/assets/landing%20page/images/logo.png?v=2',
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
        <link rel="icon" type="image/png" href="https://spmb.smkwikrama.sch.id/assets/landing%20page/images/logo.png?v=2" />
        <link rel="shortcut icon" type="image/png" href="https://spmb.smkwikrama.sch.id/assets/landing%20page/images/logo.png?v=2" />
        <link rel="apple-touch-icon" href="https://spmb.smkwikrama.sch.id/assets/landing%20page/images/logo.png?v=2" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
