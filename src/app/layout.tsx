
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tugas Sejarah',
  description: 'Platform pembelajaran interaktif.',
  icons: {
    icon: [
      { url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA06S79AAAAEElEQVQ4y2NgGAWjYBQgDwAABAAB9QFm868AAAAASUVORK5CYII=', type: 'image/png' },
    ],
    shortcut: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA06S79AAAAEElEQVQ4y2NgGAWjYBQgDwAABAAB9QFm868AAAAASUVORK5CYII=',
    apple: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA06S79AAAAEElEQVQ4y2NgGAWjYBQgDwAABAAB9QFm868AAAAASUVORK5CYII=',
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
        {/* Forcefully override and clear browser favicon cache with a transparent image */}
        <link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA06S79AAAAEElEQVQ4y2NgGAWjYBQgDwAABAAB9QFm868AAAAASUVORK5CYII=?v=10" sizes="16x16" />
        <link rel="shortcut icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA06S79AAAAEElEQVQ4y2NgGAWjYBQgDwAABAAB9QFm868AAAAASUVORK5CYII=?v=10" />
        <link rel="apple-touch-icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA06S79AAAAEElEQVQ4y2NgGAWjYBQgDwAABAAB9QFm868AAAAASUVORK5CYII=?v=10" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <meta name="referrer" content="no-referrer" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
