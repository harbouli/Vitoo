"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Link href="/">
      <Image
        className="hidden md:block cursor-pointer"
        src="/images/logo.png"
        height="100"
        width="100"
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
