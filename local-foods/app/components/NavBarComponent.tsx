import Link from "next/link"
import Image from "next/image";
import logo from "../../logo.png"

export default function NavBarComponent() {
  return (
    <div className="container w-full mx-auto sm:flex sm:items-left sm:justify-between">
      <Link href='/'>
        <header className="flex flex-row items-center">
          <Image 
            src={logo}
            alt="picture of logo"
            width={200}
          />
        </header>
      </Link>
    </div>
  );
}
