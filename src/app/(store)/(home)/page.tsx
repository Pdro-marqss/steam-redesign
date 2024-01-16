import Image from "next/image"

export default function Home() {
  return (
    <div className="mt-6">
      <div className="w-full flex justify-between">
        {/* Banner do jogo */}
        <div className="w-[72%] h-[550px]">
          <Image
            src="https://gamecraves.com/wp-content/uploads/2023/07/Stray-Header.jpg"
            alt=""
            width={1200}
            height={500}
            quality={100}
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="border border-green-500 w-[25%] h-[550px]"></div>
      </div>
    </div>
  )
}
