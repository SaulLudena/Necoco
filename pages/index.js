import Head from "next/head";
import Header from "../src/components/header";
import AddFriends from "../src/components/addFriends";
import FeedRandomPosts from "../src/components/feedRandomPosts";
import PostForm from "../src/components/postForm";
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
          <div className="col-span-2 ">
            <AddFriends />
          </div>
          <div className="col-span-10 overflow-y-scroll scrollbarCustom">
            <PostForm />
            <FeedRandomPosts />
          </div>
        </div>
      </div>
    </>
  );
}
