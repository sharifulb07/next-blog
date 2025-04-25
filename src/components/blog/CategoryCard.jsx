

export default function CategoryCard({title}) {
  return (
    <div className="w-full md:w-[300px] px-4 py-3 bg-cardbg">
      <h3 className="p-2 w-1/4 bg-white text-center font-poppins text-[14px] font-normal">{title}</h3>
    </div>
  )
}
