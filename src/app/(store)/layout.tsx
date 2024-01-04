import { SideHeaderMenu } from "../../components/side-header-menu";
import { ReactNode } from "react";

//um layout nada mais é que um componente que retorna um children
export default function StoreLayout({ children }: { children: ReactNode }) {
   return (
      <div className="mx-auto min-h-screen w-full max-w-[1600px]">
         <SideHeaderMenu />
         {children}
      </div>
   )
}