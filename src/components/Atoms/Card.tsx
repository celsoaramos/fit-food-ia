interface CardProps {
  backgroundColor?: string
  shadow?: string
  className?: string
  children?: JSX.Element | any[]
}

const Card: React.FC<CardProps> = ({
  backgroundColor,
  shadow,
  className,
  children,
}) => {
  return (
    <div
      className={`p-4 rounded-[20px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${backgroundColor} ${shadow} ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
