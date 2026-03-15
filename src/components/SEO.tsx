import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO = ({ 
  title,
  description,
  keywords,
  image = "/assets/hero-header.png",
  url = "https://dawetbekasipakwardi.vercel.app"
}: SEOProps) => {
  const { t, language } = useLanguage();

  const seoTitle = title || t.seo.title;
  const seoDescription = description || t.seo.description;
  const seoKeywords = keywords || t.seo.keywords;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Dawet Hitam Pak Wardi",
    "description": t.seo.description,
    "servesCuisine": "Minuman Tradisional Indonesia",
    "telephone": "+62-857-8175-5517",
    "url": url,
    "image": `${url}/assets/hero-header.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Kusuma Barat Raya No. 28, Duren Jaya",
      "addressLocality": "Bekasi Timur",
      "addressRegion": "Jawa Barat",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.234087741910953,
      "longitude": 107.02917732184005
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": ["https://maps.app.goo.gl/FV9xpbPxWQNz1QA6A"]
  };

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Dawet Hitam Pak Wardi" />
      <meta name="theme-color" content="#2bee2b" />

      {/* hreflang tags */}
      <link rel="alternate" href={url} hrefLang="x-default" />
      <link rel="alternate" href={url} hrefLang="id" />
      <link rel="alternate" href={url} hrefLang="en" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Dawet Hitam Pak Wardi" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    </Helmet>
  );
};
