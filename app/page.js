import Bars from "@/components/svgs/bars";
import GithubIcon from "@/components/svgs/github";
import Link from "next/link";

const menus = [
  { href: "/", text: "home" },
  { href: "/about", text: "about" },
  { href: "/contact", text: "contact" },
];

const icons = [
  { href: "https://github.com/ascilku", icon: GithubIcon },
  { href: "https://github.com/ascilku", icon: GithubIcon },
  { href: "https://github.com/ascilku", icon: GithubIcon },
];
export default function Home() {
  return (
    <header>
      <div className="mx-24 flex justify-between max-sm:mx-0 max-md:mx-20">
        <div className="flex space-x-6 items-center py-4 ">
          <Link
            href="/"
            className="flex items-center space-x-4 px-3 py-2  max-sm:px-0 max-sm:ms-4 max-sm:space-x-2"
          >
            <img
              src="https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109"
              className="w-10 h-10 object-cover rounded-full"
            />
            <span className="font-semibold text-base ">It's me</span>
          </Link>
          <nav className="max-sm:hidden">
            <ul className="flex space-x-2">
              {menus.map((menu, index) => (
                <Link href={menu.href}>
                  <li className="hover:bg-brand px-3 py-2 text-sm leading-[160%]">
                    {menu.text}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-6 max-sm:me-4">
          <div className="flex space-x-6  max-lg:hidden ">
            {icons.map((icon, index) => (
              <Link href={icon.href}>
                <icon.icon />
              </Link>
            ))}
          </div>
          <div className="flex items-center max-sm:space-x-3 ">
            <button className="border border-brand py-2 px-6 rounded-full  text-sm leading-[160%] ">
              Download CV
            </button>
            <button className=" p-2 sm:hidden ">
              <Bars />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
