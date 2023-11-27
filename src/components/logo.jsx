import Image from "next/image";
import SrcLogo from "../../public/logo.png";
import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/mainFeed" className="flex items-center rounded-lg ">
      <Image
        src={SrcLogo}
        alt="Necoco logo"
        width={40}
        height={40}
        className="rounded-lg"
      />
    </Link>
  );
}
