import type { Metadata } from "next";
import { Hedvig_Letters_Serif } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const hedvigLettersSerif = Hedvig_Letters_Serif({
  subsets: ["latin"],
  variable: "--font-hedvig-letters-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Update these values when deploying
export const metadata: Metadata = {
  metadataBase: new URL('https://shashwt.me'),
  title: {
    template: '%s | Shashwat Dubey',
    default: 'Shashwat Dubey — Frontend Developer'
  },
  description: "Crafting digital experiences since 2020 / I design sleek web apps, extensions, & more / 4+ years honing frontend skills with a creative edge / Passionate about web3, AI, and tech that shapes tomorrow.",
  keywords: ['frontend developer', 'web developer', 'react developer', 'nextjs', 'javascript', 'typescript', 'web3', 'AI'],
  authors: [{ name: 'Shashwat Dubey' }],
  creator: 'Shashwat Dubey',
  publisher: 'Shashwat Dubey',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9IiMxNDE0QjkiLz48cmVjdCB4PSI4IiB5PSI4IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=',
        sizes: '32x32',
        type: 'image/svg+xml',
      }
    ],
    shortcut: ['data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9IiMxNDE0QjkiLz48cmVjdCB4PSI4IiB5PSI4IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4='],
    apple: ['data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9IiMxNDE0QjkiLz48cmVjdCB4PSI4IiB5PSI4IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4='],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shashwt.me',
    title: 'Shashwat Dubey — Frontend Developer',
    description: 'Crafting digital experiences since 2020 / Frontend Developer specializing in React, Next.js, and Web3',
    siteName: 'Shashwat Dubey',
    images: [{
      url: '/og-image.png',
      width: 2561,
      height: 1313,
      alt: 'Shashwat Dubey — Frontend Developer'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shashwat Dubey — Frontend Developer',
    description: 'Crafting digital experiences since 2020 / Frontend Developer specializing in React, Next.js, and Web3',
    images: ['/og-image.png'],
    creator: '@shashwtd',
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
  verification: {
    google: 'your-google-verification-code',
  },
};

// Schema markup for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shashwat Dubey',
  url: 'https://shashwatdubey.com',
  jobTitle: 'Frontend Developer',
  description: 'Frontend Developer specializing in React, Next.js, and Web3',
  knowsAbout: ['Frontend Development', 'React', 'Next.js', 'TypeScript', 'Web3', 'AI'],
  location: {
    '@type': 'Place',
    name: 'Prayagraj, India'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${hedvigLettersSerif.variable} ${inter.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
