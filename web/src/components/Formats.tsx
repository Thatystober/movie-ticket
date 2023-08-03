
export interface FormatsProps{
  valueFormat: {
    id: number;
    formatTitle: string;
  }[];
}
export function Formats({valueFormat}: FormatsProps){
  return (
    <>
      {valueFormat.map((format) => (
        <div className="border-2 rounded-md border-gray-400 w-10 mt-4" key={format.id}>
         <p className="uppercase text-gray-400 text-center">{format.formatTitle}</p>
        </div>
      ))}
    </>
  )
}