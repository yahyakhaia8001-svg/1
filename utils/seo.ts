/**
 * SEO Utility Functions
 * Handles dynamic meta tags, schema markup, and SEO-related functionality
 */

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

/**
 * Update page meta tags dynamically
 */
export const updateMetaTags = (data: SEOData) => {
  // Update title
  document.title = data.title;

  // Update or create meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', data.description);

  // Update or create meta keywords
  if (data.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', data.keywords);
  }

  // Update Open Graph tags
  updateOGTag('og:title', data.title);
  updateOGTag('og:description', data.description);
  if (data.image) {
    updateOGTag('og:image', data.image);
  }
  if (data.url) {
    updateOGTag('og:url', data.url);
  }
  if (data.type) {
    updateOGTag('og:type', data.type);
  }

  // Update canonical URL
  if (data.url) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', data.url);
  }
};

/**
 * Helper to update or create Open Graph meta tags
 */
const updateOGTag = (property: string, content: string) => {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

/**
 * Generate breadcrumb schema
 */
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://tropicamvoyage.ma${item.url}`
    }))
  };
};

/**
 * Generate TourOperator schema
 */
export const generateTourOperatorSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'TourOperator',
    name: 'Tropicam Voyage',
    url: 'https://tropicamvoyage.ma',
    telephone: '+212608986949',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bd General el Kettani, Résidence ARWA, 1er Étage N°4',
      addressLocality: 'Settat',
      postalCode: '26000',
      addressCountry: 'MA'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127'
    }
  };
};

/**
 * Generate TouristTrip schema for a tour
 */
export const generateTouristTripSchema = (tour: {
  name: string;
  description: string;
  image?: string;
  price?: string;
  duration?: string;
  destination?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.name,
    description: tour.description,
    image: tour.image || 'https://tropicamvoyage.ma/og-image.jpg',
    provider: {
      '@type': 'TourOperator',
      name: 'Tropicam Voyage',
      url: 'https://tropicamvoyage.com'
    },
    ...(tour.price && {
      offers: {
        '@type': 'Offer',
        price: tour.price,
        priceCurrency: 'MAD'
      }
    }),
    ...(tour.duration && { duration: tour.duration }),
    ...(tour.destination && {
      destination: {
        '@type': 'Place',
        name: tour.destination
      }
    })
  };
};


