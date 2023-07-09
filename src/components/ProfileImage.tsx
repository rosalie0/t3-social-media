import React from "react";
import Image from "next/image";

type ProfileImageProps = {
  src?: string | null;
  className?: string;
};
export default function ProfileImage({
  src,
  className = "",
}: ProfileImageProps) {
  return (
    <div
      className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}
    >
      {src == null ? null : (
        <Image src={src} alt="profile image" quality={100} fill />
      )}
    </div>
  );
}
