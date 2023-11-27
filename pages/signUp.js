import Head from "next/head";
import DedidateSignUp from "../src/components/dedicatedSignUp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Necoco</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="./logo.png" />
      </Head>

      <div className="h-screen  bg-[#ebebeb]">
        <div className="grid grid-cols-12  h-[100%] ">
          <DedidateSignUp />
        </div>
      </div>
    </>
  );
}
