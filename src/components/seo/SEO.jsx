import { Helmet } from "react-helmet-async";

const SEO = () => {
  return (
    <Helmet>
      {/* PRIMARY */}

      <link
  rel="icon"
  type="image/svg+xml"
  href="/logo.svg"
/>

<link
  rel="apple-touch-icon"
  href="/logo.svg"
/>

      <title>
        Bizula — Commerce Infrastructure
        For African Businesses
      </title>

      <meta
        name="description"
        content="Bizula is Africa’s modern commerce infrastructure platform powering bookings, logistics, inventory, B2B sourcing, retail operations, customer ordering, and business growth."
      />

      <meta
        name="keywords"
        content="
        African commerce platform,
        African business software,
        booking platform Nigeria,
        inventory management Africa,
        logistics platform Nigeria,
        B2B marketplace Africa,
        commerce infrastructure,
        retail operations software,
        booking management system,
        logistics infrastructure,
        African SaaS,
        supplier marketplace Africa,
        retail software Nigeria,
        business operating system
      "
      />

      <meta
        name="author"
        content="Bizula"
      />

      {/* MOBILE */}

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      {/* THEME */}

      <meta
        name="theme-color"
        content="#050505"
      />

      {/* OPEN GRAPH */}

      <meta
        property="og:title"
        content="Bizula — Commerce Infrastructure For African Businesses"
      />

      <meta
        property="og:description"
        content="Manage operations, bookings, logistics, inventory, B2B sourcing, and commerce from one intelligent ecosystem."
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content="https://afribizula.com"
      />

      <meta
        property="og:image"
        content="https://afribizula.com/og-image.jpg"
      />

      {/* TWITTER */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content="Bizula — Commerce Infrastructure For African Businesses"
      />

      <meta
        name="twitter:description"
        content="Africa’s connected operating system for business operations, logistics, retail, and commerce."
      />

      <meta
        name="twitter:image"
        content="https://afribizula.com/og-image.jpg"
      />

      {/* INDEXING */}

      <meta
        name="robots"
        content="index, follow"
      />

      {/* CANONICAL */}

      <link
        rel="canonical"
        href="https://afribizula.com"
      />
    </Helmet>
  );
};

export default SEO;