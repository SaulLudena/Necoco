import Image from "next/image";
import SrcLogo from "../../public/logo.png";
export default function Logo() {
  return (
    <a href="">
      <Image
        src={SrcLogo}
        alt="Necoco logo"
        width={40}
        height={40}
        className="rounded-lg"
      />
    </a>
  );
}
