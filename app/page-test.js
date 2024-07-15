import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import GithubIcon from "@/components/svgs/github";
const menus = [
  { href: "/", text: "home" },
  { href: "/about", text: "about" },
  { href: "/contact", text: "contact" },
];

const icons = [
  {
    href: "https://web.facebook.com/?locale=id_ID&_rdc=1&_rdr",
    icon: GithubIcon,
  },
  { href: "https://github.com/ascilku", icon: GithubIcon },
  { href: "https://heroicons.com/", icon: GithubIcon },
];
export default function Home() {
  return (
    <header className=" fixed w-full">
      <div className="py-3 px-4 mx-auto justify-between items-center flex flex-row md:max-w-4xl md:py-4 xl:max-w-7xl">
        <div className="flex items-center md:space-x-6">
          <Link
            href={"/"}
            className="flex flex-row py-2 space-x-2 md:space-x-4 xl:space-x-6 items-center"
          >
            <img
              src="https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109"
              className="leading-[160%] w-6 h-6 md:w-10 md:h-10 xl:w-14 xl:h-14 object-cover rounded-full"
            />
            <span className="font-semibold leading-[160%]">It's me</span>
          </Link>
          <nav className="hidden md:block">
            {/* md:block dan md:flex itu hampir sama */}
            <ul className="flex space-x-2 ">
              {menus.map((menu, index) => (
                <li key={index} className="hover:bg-brand">
                  <Link href={menu.href}>
                    <p className="px-3 py-2 leading-[160%] text-sm">
                      {menu.text}
                    </p>
                    {/* text-text hover:text-brand */}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          <div>
            <ul className=" space-x-6 items-center hidden lg:flex">
              {icons.map((icon, index) => (
                <li key={index}>
                  {/* <Link href={""}> */}
                  {/* <img src=""> */}
                  <icon.icon />
                  {/* </img> */}
                </li>
              ))}
            </ul>
          </div>
          <button className="py-2 px-6 text-sm leading-[160%] border border-brand rounded-full">
            Download CV
          </button>
          <button className="md:hidden p-2 ">
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
