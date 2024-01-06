import Image from "next/image";
import Link from "next/link";

import Steam_logo from '../../public/logo_steam.svg';
import { SearchForm } from "./search-form";

export function SideHeaderMenu() {
   return (
      <div className="flex flex-col w-[300px] h-[calc(100dvh-80px)] mt-10 gap-8 border-zinc-200">
         <Link href="/">
            <Image
               src={Steam_logo}
               width={170}
               // height={200}
               alt=""
            />
         </Link>

         <div>
            <p>Game store</p>
            <p>Library</p>
            <p>Community</p>
            <p>Friends</p>
         </div>

         <div>
            <p>Settings</p>
            <p>Help</p>
         </div>

      </div>
   )
}