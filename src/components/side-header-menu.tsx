import Image from "next/image";
import Link from "next/link";

import { SearchForm } from "./search-form";

import { Gamepad2, LibraryBig, MessageSquare, Users, Settings, ShieldQuestion } from "lucide-react";
import Steam_logo from '../../public/logo_steam.svg';

export function SideHeaderMenu() {
   return (
      <div className="flex flex-col w-[300px] h-[calc(100dvh-80px)] mt-10 gap-8">
         <Link href="/">
            <Image
               src={Steam_logo}
               className="w-[170px]"
               width={200}
               // height={200}
               alt=""
            />
         </Link>
         <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-7 mt-3">
               <span className="flex gap-4 pl-9">
                  <Gamepad2 />
                  Game store
               </span>
               <span className="flex gap-4 pl-9">
                  <LibraryBig />
                  Library
               </span>
               <span className="flex gap-4 pl-9">
                  <MessageSquare />
                  Community
               </span>
               <span className="flex gap-4 pl-9">
                  <Users />
                  Friends
               </span>
            </div>

            <div className="flex flex-col gap-7">
               <span className="flex gap-4 pl-9">
                  <Settings />
                  Settings
               </span>
               <span className="flex gap-4 pl-9">
                  <ShieldQuestion />
                  Help
               </span>
            </div>
         </div>
      </div>
   )
}