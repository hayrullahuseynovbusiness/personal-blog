import Head from "next/head";
interface SEOProps {
  title?: string;
  description?: string;
}
const SEO: React.FC<SEOProps> = ({
  title = "Hayrulla Huseynov - Web Developer based in Turkmenistan.",
  description = "Hayrulla Huseynov - Web Developer based in Turkmenistan.",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={"Hayrulla Huseynov"} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Head>
  );
};

export default SEO;
