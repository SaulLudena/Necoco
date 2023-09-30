import Image from "next/image";
import SrcLogo from "../../public/logo.png";
export default function Logo() {
  return (
    <a href="" className="flex items-center p-3 rounded-lg bg-zinc-900">
      <p>Necoco</p>
      <Image
        src={SrcLogo}
        alt="Necoco logo"
        width={30}
        height={30}
        className="rounded-lg"
      />
    </a>
  );
}
