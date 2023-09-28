import './Button.css'
interface Props {
  color?: string;
  name?: string;
  variant?: string;
}

function Button({name = "Default"}: Props) {
  return (
    <>

    <div>
      <button >{name}</button>
      <button className="ms-5 hoverFocus">{name}</button>
    </div>
    
    </>
  );
}

export default Button;
