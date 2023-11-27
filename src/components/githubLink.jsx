import { AiFillGithub } from "react-icons/ai";

export default function GithubLink() {
  return (
    <a
      href="https://github.com/SaulLudena/Necoco"
      target="_blank"
      rel="noopener noreferrer"
      className="p-1 text-zinc-900 "
    >
      <AiFillGithub size={30} />
    </a>
  );
}
