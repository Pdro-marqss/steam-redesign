import Image from "next/image"
import windowsIcon from '../../../../public/windows.svg';

export default function Home() {
  return (
    <div className="mt-6">
      <div className="w-full flex justify-between">
        {/* Banner do jogo */}
        <div className="w-[72%]">
          <Image
            src="https://gamecraves.com/wp-content/uploads/2023/07/Stray-Header.jpg"
            alt=""
            width={1200}
            height={500}
            quality={100}
            className="max-w-full rounded-2xl aspect-video"
          />
        </div>

        <div className="w-[25%] flex flex-col justify-between p-10 rounded-2xl border border-white border-2">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-3xl">Stray</h3>
            <p className="font-light text-sm leading-5">Lost, alone and separated from his family, a stray cat needs to unravel an ancient mystery to escape a forgotten cybercity and find his way home.</p>
          </div>

          <div className="">
            <span className="text-[17px]">R$ 49.99 BRL</span>
            <div className="flex items-center justify-between mt-1">
              <button className="bg-zinc-900 px-7 py-3 rounded-xl text-xl font-semibold">Available now</button>
              <Image
                src={windowsIcon}
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
