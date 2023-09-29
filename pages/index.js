import Head from "next/head";
import Header from "../src/components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Necoco</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="./logo.png" />
      </Head>

      <div className="h-screen  bg-[#1e1e1e]">
        <Header />

        <div className="grid grid-cols-12  h-[88%]">
          <div className="col-span-2 ">izquierda</div>
          <div className="col-span-8 ">centro</div>
          <div className="col-span-2 ">derecha</div>
        </div>
      </div>
    </>
  );
}
