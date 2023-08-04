import React from "react";
import { Helmet } from "react-helmet";

function Layout({children, title, description, keywords, author }) {
  return (
    <div>
      
      <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
}
Layout.defaultProps ={
    title:'WinnDeal',
    description:'We deliver cutting-edge IT solutions tailored to your business needs in UAE,Our team of experts is committed to providing top-notch services that drive results',
    keywords:'WinnDeal,windeal,winndeal,it consulting,IT consulting,javacsript,IT solution,IT company,UAE,uae,Dubai,dubai,IT support companies,IT services near me,IT services company,IT firm,IT solutions company,IT company website,it solutions,muhammed nizamudheen m,nizamudheen,Muhammed Nizamudheen M,Nizamudheen',
    author:'Muhammed Nizamudheen M'
}
export default Layout;
