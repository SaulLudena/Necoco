import { useState } from "react";
import GithubLink from "./githubLink";
import Logo from "./logo";
import SignIn from "./signIn";
import SignUp from "./signUp";
import SignedHeader from "./signedHeader";
export default function Header() {
  const [signed, setSigned] = useState(false);
  return (
    <div className="flex items-center justify-between px-10 text-white h-[12%] shadow-xl">
      <div>
        <Logo />
      </div>
      <div>
        <ul className="flex items-center gap-2">
          <li className="flex items-center gap-2">
            {signed ? (
              <SignedHeader />
            ) : (
              <>
                <SignIn />
                <SignUp />
              </>
            )}
          </li>
          <li>
            <GithubLink />
          </li>
        </ul>
      </div>
    </div>
  );
}
