import Image from "next/image"

export default function Para({title1, title2, title3, img, desc}) {
  return (
    <div className="flex flex-col gap-[20]">
        {title1 && <h2 className="text-[24px] font-pt_serif font-bold text-[#272343]">{title1}</h2>}
        {title2 && <h2 className="text-[22px] font-pt_serif font-bold text-[#272343]">{title2}</h2>}
        {title3 && <h2 className="text-[20px] font-pt_serif font-medium text-[#272343] text-justify">{title3}</h2>}
        {img && <Image src={img} width={650} height={300} alt="blog-image"  className="w-full h-[300px]"/> }
        {desc && <h3 className="font-poppins text-[18px] text-justify text-[#494B5C]">{desc}</h3>}

      
    </div>
  )
}
