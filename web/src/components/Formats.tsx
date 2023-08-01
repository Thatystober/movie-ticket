interface FormatsProps{
  valueFormat: string[]
}
export function Formats({valueFormat}: FormatsProps){
  return (
    <>
      {valueFormat.map((format, index) => (
        <div className="border-2 rounded-md border-gray-400 w-10 mt-4">
         <p className="uppercase text-gray-400 text-center"key={index}>{format}</p>
        </div>
      ))}
    </>
  )
}