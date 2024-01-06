import { ReactNode } from "react";

import { SideHeaderMenu } from "../../components/side-header-menu";
import { Header } from "@/components/header";

//um layout é basicamente um componente que retorna um children
export default function StoreLayout({ children }: { children: ReactNode }) {
   return (
      <div className="mx-auto min-h-screen w-full max-w-[1600px] flex gap-3">
         <SideHeaderMenu />
         <div className="mt-10 w-full">
            <Header />
            {children}
         </div>
      </div>
   )
}