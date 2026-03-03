import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/video_logo.png"
      alt="Logo"
      width={28}
      height={28}
      priority
    />
  );
}