import { MDBIcon } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function Layout({children, title, description, keywords, author,canonicalUrl}) {
  const [showGoToTop, setShowGoToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setShowGoToTop(true);
    } else {
      setShowGoToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const escapedCanonicalUrl = canonicalUrl.replace(/["]/g, '\\"');
  return (
    <div>
      
      <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <script type="application/ld+json">
          {`{
            "@context": "http://schema.org",
            "@type": "WebPage",
            "url": "${escapedCanonicalUrl}"
          }`}
        </script>
          <link rel="canonical" href={canonicalUrl} />
        <title>{title}</title>
      </Helmet>
      {children}
      {showGoToTop && (
        <MDBIcon far icon="caret-square-up" size='2x' className="go-to-top-button" onClick={scrollToTop}/>
      )}
    </div>
  );
}
Layout.defaultProps ={
    title:'WinnDeal',
    description:'We deliver cutting-edge IT solutions tailored to your business needs in UAE,Our team of experts is committed to providing top-notch services that drive results',
    keywords:'WinnDeal,windeal,winndeal,it consulting,IT consulting,javacsript,IT solution,IT company,UAE,uae,Dubai,dubai,IT support companies,IT services near me,IT services company,IT firm,IT solutions company,IT company website,it solutions,muhammed nizamudheen m,nizamudheen,Muhammed Nizamudheen M,Nizamudheen,Winndeal UAE,Laptop & desktop suppliers in Dubai,Computer accessories suppliers in UAE,computer hardware suppliers in dubai,managed IT solutions,best it consulting firms,Dubai based IT service providers,IT AMC Service provider,IT remote assistants',
    author:'Muhammed Nizamudheen M',
    canonicalUrl:'https://winndeal.com/'
}
export default Layout;
