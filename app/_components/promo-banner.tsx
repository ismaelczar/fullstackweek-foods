import Image, { StaticImageData } from "next/image";

interface PromoBannerProps {
  src: string | StaticImageData;
  alt: string;
}

const PromoBanner = ({ src, alt }: PromoBannerProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      className="h-auto w-full object-contain"
      sizes="100vw"
      quality={100}
    />
  );
};

export default PromoBanner;
