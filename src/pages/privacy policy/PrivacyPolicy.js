import React, { useEffect, useState } from 'react';

export default function PrivacyPolicy() {
  const [height, setHeight] = useState(window.innerHeight);

  const privacyPolicy = require("../../files/privacy.pdf")
  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <iframe
      src={privacyPolicy}
      width="100%"
      height={height}
    />
  );
}