import { FiSearch } from "react-icons/fi"
import SubscribeBtn from "./SubscribeBtn"

export default function SearchSec() {
  return (
    <section className="flex flex-col justify-center items-center bg-off-white h-[350px] gap-4">
        <h1 className="font-pt_serif font-bold text-[32px]">'Travel' here's what we've got </h1>
        <div className="flex flex-row w-full items-center justify-center px-[30%] ">
            <form action="" className="bg-off-white/70 w-full flex">
                    <div className="relative w-full  h-[48px] mx-auto flex items-center bg-off-white/70 border border-gray-300">
                      <div  className="absolute  inset-y-0 left-0 pl-3 z-50 flex items-center  bg-off-white/70 cursor-pointer">
                        <FiSearch className="h-5 w-5 cursor-pointer  "     />
                      </div>
                      <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        id="#search"
                        className="h-[48px] block w-full pl-10 pr-3 py-2  rounded-lg bg-off-white/70  focus:outline-none focus:ring-1 focus:rounded-none focus:ring-black/30 focus:border-transparent"
                      />
                    </div>
                    <SubscribeBtn title={'Search'} />
                  </form>
                  

        </div>
    </section>
      
   
  )
}
