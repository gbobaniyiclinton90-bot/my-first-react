

type ButtonProps = {
  ht?:string;
  wt?:string;
  bg?: string;
  color?: string;
  text?: string;
  isBorder?: boolean
};
const Button = ({ht = ' 40px', wt = ' 70px', bg, color, text, isBorder}: ButtonProps) => {
  return (
    <button style={{ 
        height: ht, 
        width: wt, 
        backgroundColor: bg, 
        color: color, 
        borderRadius: isBorder ? '10px' : 0 }}>
      {text} 
    </button>
  )
}

export default Button
