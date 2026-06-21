import Image from "next/image";

export default function SanityImage(props) {
  return <Image {...props} unoptimized />;
}
