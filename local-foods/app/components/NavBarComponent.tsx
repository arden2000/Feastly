import Link from "next/link"
import Image from "next/image";
import logo from "../../logo.png"
import { BiRestaurant } from "react-icons/bi";


export default function NavBarComponent() {
  return (
    <div className="w-full mx-auto sm:flex sm:items-left sm:justify-between py-5 bg-bright-orange">
      <Link href='/'>
        <header className="ml-40 flex flex-row items-center">
          
          <p className="text-4xl text-white">FEASTLY</p>
          <BiRestaurant size={40}/>
        </header>
      </Link>
    </div>
  );
}
