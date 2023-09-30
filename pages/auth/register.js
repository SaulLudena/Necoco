import Head from "next/head";
import Header from "../../src/components/header";
import Recover_password from "../../src/components/recoverPassword";
export default function RecoverPassword() {
  return (
    <>
      <Head>
        <title>Registrate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="./logo.png" />
      </Head>

      <div className="h-screen  bg-[#1e1e1e]">
        <Header />

        <div className="grid grid-cols-12  h-[88%] ">ventana de registro</div>
      </div>
    </>
  );
}
