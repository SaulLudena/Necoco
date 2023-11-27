import Head from "next/head";
import Header from "../src/components/header";
import PostForm from "../src/components/postForm";
import FeedRandomPosts from "../src/components/feedRandomPosts";
import ValidateToken from "../src/helpers/validateToken";

export default function RecoverPassword() {
  ValidateToken();
  return (
    <>
      <Head>
        <title>Necoco</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="./logo.png" />
      </Head>

      <div className="h-screen  bg-[#ebebeb]">
        <Header />

        <div className="grid grid-cols-12  h-[88%]">
          <div className="col-span-12 overflow-y-scroll scrollbarCustom">
            <PostForm />
            <FeedRandomPosts />
          </div>
        </div>
      </div>
    </>
  );
}
