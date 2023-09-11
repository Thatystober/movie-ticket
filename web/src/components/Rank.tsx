interface RankProps{
  valueRank: string
}
export function Rank({valueRank}: RankProps){
   const bgColorClass =
    valueRank === 'L' ? 'bg-green-700' 
    : valueRank === '10' ? 'bg-sky-400' 
    : valueRank === '12' ? 'bg-yellow-400' 
    :  valueRank === '14' ? 'bg-orange-600' 
    : valueRank === '16' ? 'bg-red-600' 
    : 'bg-neutral-950';

  return (
    <div className={`${bgColorClass} w-8 rounded h-7`}>
      <p className="uppercase text-center flex justify-center items-center h-full">{valueRank}</p>
    </div>
  )
}