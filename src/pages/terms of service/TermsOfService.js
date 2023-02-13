import React, { useEffect, useState } from 'react';

export default function TermsOfService() {
  const [height, setHeight] = useState(window.innerHeight);

  const termsOfService = require("../../files/terms.pdf")
  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <iframe
      src={termsOfService}
      width="100%"
      height={height}
    />
  );
}