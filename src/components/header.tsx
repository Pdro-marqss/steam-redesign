import Image from "next/image";

import { ShoppingBag, Bell } from 'lucide-react';

import { SearchForm } from "@/components/search-form";

export function Header() {
   return (
      <div className="flex justify-between items-center w-full">
         <SearchForm />
         <div className="flex items-center gap-5 h-full">
            <span className="bg-zinc-700 rounded-full p-2">
               <Bell className="h-5 w-5" />
            </span>
            <span className="bg-zinc-700 rounded-full p-2">
               <ShoppingBag className="h-5 w-5" />
            </span>
            <Image
               src="https://github.com/Pdro-marqss.png"
               width={80}
               height={80}
               className="h-9 w-9 rounded-full border-2 border-orange-500"
               alt=""
               quality={100}
            />
         </div>
      </div>
   )
}