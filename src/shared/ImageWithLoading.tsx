"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageWithLoadingProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageWithLoading({ src, alt, className }: ImageWithLoadingProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center w-full h-full rounded">
          <span className="relative w-12 h-12 inline-block">
            <span className="absolute w-12 h-12 rounded-full border-t-4 border-r-4 border-white border-solid box-border animate-spin"></span>
            <span
              className="absolute w-12 h-12 rounded-full border-l-4 border-b-4 border-[#ec2127] border-solid box-border animate-spin-reverse"
              style={{ animationDuration: "0.5s" }}
            ></span>
          </span>
        </div>
      )}
      <Image
        className={className? className : "object-cover" }
        src={src}
        alt={alt}
        fill={true}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.3s" }}
      />
    </>
  );
}

// Example usecase:
// <div className="w-20 h-20 relative">
//   <ImageWithLoading src={`/naresh-logo.png`} alt={`naresh-logo.png`} />
// </div>;
