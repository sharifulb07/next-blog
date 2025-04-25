

export default function SectionTitle({title}) {
  return (
    <h1 className="text-[32px] font-bold font-pt_serif flex flex-col">
      {title}
      <div className="h-1 w-16 bg-amber-500 rounded-full"></div>
    </h1>
  )
}
