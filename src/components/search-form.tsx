import { Search } from "lucide-react";

export function SearchForm() {
   return (
      <form
         className="flex w-[450px] h-[40px] items-center gap-3 rounded-lg bg-zinc-800 px-3 py-1 ring-zinc-700"
      >
         <Search className="w-5 h-5 text-zinc-400" />

         <input
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-400"
            name="searchgame"
            placeholder="Search games"
            required
            autoComplete="false"
         />
      </form>
   );
}