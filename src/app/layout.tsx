import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SMK Wikrama Bogor',
  description: 'Platform pembelajaran interaktif SMK Wikrama Bogor.',
  icons: {
    icon: [
      { url: 'https://upload.wikimedia.org/wikipedia/id/a/a2/Logo_Wikrama.png?v=1', type: 'image/png' },
      { url: 'https://upload.wikimedia.org/wikipedia/id/a/a2/Logo_Wikrama.png?v=1', rel: 'icon', type: 'image/png' },
      { url: 'https://upload.wikimedia.org/wikipedia/id/a/a2/Logo_Wikrama.png?v=1', rel: 'shortcut icon', type: 'image/png' },
    ],
    apple: [
      { url: 'https://upload.wikimedia.org/wikipedia/id/a/a2/Logo_Wikrama.png?v=1' },
    ],
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
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/id/a/a2/Logo_Wikrama.png?v=1" type="image/png" />
        <link rel="shortcut icon" href="https://upload.wikimedia.org/wikipedia/id/a/a2/Logo_Wikrama.png?v=1" type="image/png" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
