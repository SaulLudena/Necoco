import React, { Suspense } from "react";
import FetchingPosts from "../helpers/fetchingPosts";
import PostSkeleton from "./postSkeleton";
const PostItem = React.lazy(() => import("./postItem"));

export default function FeedRandomPosts() {
  const { posts } = FetchingPosts();

  return (
    <div className="grid justify-center">
      <ul className="grid w-full gap-5 pb-5 list-none">
        <Suspense fallback={<PostSkeleton />}>
          {posts.map((post) => (
            <PostItem key={post.idPost} post={post} />
          ))}
        </Suspense>
      </ul>
    </div>
  );
}
