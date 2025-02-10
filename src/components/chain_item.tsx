import Image from 'next/image'

function ChainItem({ title, icon, onSelect }: { title: string; icon: string; onSelect: (title: string) => void }) {
  const onClick = () => {
    onSelect(title)
  }
  return (
    <div className="flex items-center rounded-md p-3.5 border border-greyblue-50 cursor-pointer mb-3" onClick={onClick}>
      <div className="flex w-5 h-5 mr-4 justify-center">
        <Image src={icon} className="m-auto" width={20} height={20} alt="" />
      </div>
      <div className="flex-grow">{title}</div>
      <svg viewBox="0 0 14 8" className="fill-current w-3 h-3 -rotate-90 text-mainblue-300">
        <path
          d="M13.74 1.25l-6.3 5.6a.7.7 0 01-.92 0l-6.3-5.6A.7.7 0 011.14.2l5.84 5.18L12.82.2a.7.7 0 11.92 1.05z"
          fillRule="nonzero"
        ></path>
      </svg>
    </div>
  )
}
export default ChainItem
