"use client";

import Image, { ImageProps } from "next/image";
import React, { useState } from "react";

type Props = { src: string };

function ImageWithSkeleton({ src, alt, ...props }: Props & ImageProps) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Image
        {...props}
        src={src}
        alt={alt}
        onLoadingComplete={() => setLoading(false)}
      />
      {loading && (
        <div className="h-full w-full animate-pulse bg-black/30 rounded"></div>
      )}
    </>
  );
}

export default ImageWithSkeleton;
