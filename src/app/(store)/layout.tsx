import { SearchForm } from "@/components/search-form";
import { SideHeaderMenu } from "../../components/side-header-menu";
import { ReactNode } from "react";

//um layout nada mais é que um componente que retorna um children
export default function StoreLayout({ children }: { children: ReactNode }) {
   return (
      <div className="mx-auto min-h-screen w-full max-w-[1600px] flex gap-3">
         <SideHeaderMenu />
         <div className="mt-10">
            <SearchForm />
            {children}
         </div>
      </div>
   )
}