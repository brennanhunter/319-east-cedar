import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "319 E Cedar Drive, Tuttle OK - Two Homes on 2 Acres | $739,999",
  description: "Stunning property featuring two complete homes on 2 wooded acres in Tuttle, OK. Main house (2,751 sq ft) + brand new ADA-accessible guest house (1,200 sq ft). A-rated schools, modern amenities, perfect for multi-generational living.",
  keywords: [
    "319 E Cedar Drive Tuttle",
    "319 East Cedar Drive Oklahoma", 
    "Tuttle Oklahoma real estate",
    "two homes one property Tuttle OK",
    "multi-generational living Tuttle",
    "ADA accessible home Tuttle Oklahoma",
    "Tuttle Public Schools homes for sale",
    "Tuttle school district property",
    "2 acres Tuttle Oklahoma",
    "guest house Tuttle OK",
    "Grady County Oklahoma real estate",
    "Cedar Drive Tuttle homes",
    "Oklahoma homes with guest house",
    "Tuttle OK fiber internet homes"
  ],
  authors: [{ name: "Real Estate Professional" }],
  creator: "Professional Real Estate Marketing",
  publisher: "Real Estate Professional",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.319ecedar.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "319 E Cedar Drive, Tuttle OK - Two Homes on 2 Acres",
    description: "Stunning property featuring two complete homes on 2 wooded acres in Tuttle, OK. Perfect for multi-generational living with A-rated schools and modern amenities.",
    url: 'https://www.319ecedar.com',
    siteName: '319 E Cedar Drive - Tuttle Oklahoma Real Estate',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/photos/arial1.jpg',
        width: 1200,
        height: 630,
        alt: '319 E Cedar Drive - Aerial view of two homes on 2 acres in Tuttle, Oklahoma',
        type: 'image/jpeg',
      },
      {
        url: '/photos/house1-front.webp',
        width: 1200,
        height: 800,
        alt: 'Main house front view - 319 E Cedar Drive, Tuttle OK',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "319 E Cedar Drive, Tuttle OK - Two Homes on 2 Acres",
    description: "Stunning property with two complete homes on 2 wooded acres. A-rated Tuttle schools, modern amenities, perfect for multi-generational living.",
    images: ['/photos/arial1.jpg'],
    creator: '@realestate',
    site: '@realestate',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-code-here',
    // yandex: 'verification-code-here',
    // bing: 'verification-code-here',
  },
  category: 'Real Estate',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional SEO and Performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#588c3f" />
        <meta name="color-scheme" content="light" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.zillow.com" />
        <link rel="preconnect" href="https://listings.ewingmedia.co" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateListing",
              "name": "319 E Cedar Drive - Two Homes on 2 Acres",
              "description": "Stunning property featuring two complete homes on 2 wooded acres in Tuttle, OK. Main house (2,751 sq ft) + brand new ADA-accessible guest house (1,200 sq ft).",
              "url": "https://www.319ecedar.com",
              "image": [
                "https://www.319ecedar.com/photos/arial1.jpg",
                "https://www.319ecedar.com/photos/house1-front.webp",
                "https://www.319ecedar.com/photos/house2-front.webp"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "319 E Cedar Drive",
                "addressLocality": "Tuttle",
                "addressRegion": "OK",
                "postalCode": "73089",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 35.2934,
                "longitude": -97.8142
              },
              "offers": {
                "@type": "Offer",
                "price": "749999",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-10-01"
              },
              "floorSize": {
                "@type": "QuantitativeValue",
                "value": 3951,
                "unitText": "SQFT"
              },
              "numberOfRooms": 5,
              "numberOfBathroomsTotal": 4,
              "yearBuilt": 1994,
              "lotSize": "2 acres",
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Property Type",
                  "value": "Single Family Residence with Guest House"
                },
                {
                  "@type": "PropertyValue", 
                  "name": "School District",
                  "value": "Tuttle Public Schools"
                },
                {
                  "@type": "PropertyValue",
                  "name": "ADA Accessible",
                  "value": "Guest House"
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased bg-cream-white text-space-cadet selection:bg-money-green/20">
        <div id="root">
          {children}
        </div>
        
        {/* Google Analytics - Replace with your tracking ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  );
}
