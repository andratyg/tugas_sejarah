import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SMK Wikrama Bogor',
  description: 'Platform pembelajaran interaktif SMK Wikrama Bogor.',
  icons: {
    icon: 'https://upload.wikimedia.org/wikipedia/id/a/a2/Logo_Wikrama.png',
    shortcut: 'https://upload.wikimedia.org/wikipedia/id/a/a2/Logo_Wikrama.png',
    apple: 'https://upload.wikimedia.org/wikipedia/id/a/a2/Logo_Wikrama.png',
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
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/id/a/a2/Logo_Wikrama.png" />
        <link rel="shortcut icon" href="https://upload.wikimedia.org/wikipedia/id/a/a2/Logo_Wikrama.png" />
        <link rel="apple-touch-icon" href="https://upload.wikimedia.org/wikipedia/id/a/a2/Logo_Wikrama.png" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
