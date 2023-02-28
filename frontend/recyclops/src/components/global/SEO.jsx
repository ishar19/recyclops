import React from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
const SEO = ({ title, description, name, authors, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={authors} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:creator" content={name} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  authors: PropTypes.string,
  keywords: PropTypes.string,
  name: PropTypes.string,
};
export default SEO;
