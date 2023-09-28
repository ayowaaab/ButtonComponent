import "./Button.css";
interface Props {
  color?: string;
  disableShadow?:boolean;
  name?: string;
  variant?: string;

}

function Button({ name = "Default", color = "light", variant = "",disableShadow=false }: Props) {
  variant !== "" ? (variant = variant + "-" + color ) : (variant = color);
  disableShadow ? variant=variant+" disabledShadow":variant;
  var description = 'color="'+color+'"';


  return (
    <>
      <div className="mb-3 ms-5">
        <p>{"<Button "+description+" />"}</p>
        <button className={"btn btn-" + variant}>{name}</button>
      </div>
    </>
  );
}

export default Button;
