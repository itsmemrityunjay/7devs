import React, { useState } from 'react';

export function ImageWithFallback({ src, alt, className, fallback = "https://via.placeholder.com/300/CCCCCC/666666/?text=Image+Not+Found" }) {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <img
      src={error ? fallback : src}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
}