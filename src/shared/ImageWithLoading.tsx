"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageWithLoadingProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageWithLoading({
  src,
  alt,
  className,
}: ImageWithLoadingProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center rounded">
          <span
            className="relative inline-block size-12 max-h-12 max-w-12 rounded-full text-[#343434] perspective-[1000px] transform-[rotateZ(45deg)]"
            aria-hidden="true"
          >
            <span className="absolute left-0 top-0 size-full rounded-full transform-[rotateX(70deg)] animate-[loader-spin_1s_linear_infinite]" />
            <span className="absolute left-0 top-0 size-full rounded-full text-[#ff3d00] transform-[rotateY(70deg)] animate-[loader-spin_1s_linear_infinite] [animation-delay:0.4s]" />
          </span>
        </div>
      )}
      <Image
        className={className ? className : "object-cover"}
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
