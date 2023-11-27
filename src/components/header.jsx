import { useState } from "react";
import GithubLink from "./githubLink";
import Logo from "./logo";

import SignedHeader from "./signedHeader";
export default function Header() {
  return (
    <div className="flex items-center justify-between px-10 text-white h-[12%] shadow-xl">
      <div>
        <Logo />
      </div>
      <div>
        <ul className="flex items-center gap-2">
          <li className="flex items-center gap-2">
            <SignedHeader />
          </li>
          <li>
            <GithubLink />
          </li>
        </ul>
      </div>
    </div>
  );
}
