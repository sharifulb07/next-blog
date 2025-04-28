import Image from "next/image";


export default function CommentTem({name, hour, desc,photo}) {
  return (
    <section className="flex flex-col gap-2">
        <div className="flex gap-3">
            <Image src={photo} height={40} width={40} alt="" className="rounded-full w-[40] h-[40]" />
           
           <div>
            <h2 className="font-poppins text-5 font-medium">{name}</h2>
<p>{hour} ago </p>
           </div>

        </div>
<p className="text-menu-color text-4 mb-1">{desc}</p>
<p className="mb-10">Reply </p>
      
    </section>
  )
}
