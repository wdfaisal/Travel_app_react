import Image from "next/image";


const Button = (props) => {
  return (
    <button
    className={`flexCenter gap-3 rounded-full border ${props.variant} ${props.full && 'w-full'}`}
      type={props.type}
    >
      <Image src={props.icon} alt={props.title} width={24} height={24} />
      <label className="bold-16 whitespace-nowrap cursor-pointer">{props.title}</label>
    </button>
  )
}

export default Button