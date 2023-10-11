import "./Button.css";
interface Props {
  color?: string;
  disableShadow?: boolean;
  Disabled?: boolean;
  name?: string;
  variant?: string;
  endIcon?: boolean;
  startIcon?: boolean;
}

function Button({
  name = "Default",
  color = "light",
  variant = "",
  disableShadow = false,
  Disabled = false,
  endIcon = false,
  startIcon = false,
}: Props) {
  variant !== "" ? (variant = variant + "-" + color) : (variant = color);
  disableShadow ? (variant = variant + " disabledShadow") : variant;

  // var description = 'color="' + color + '"';

  const iconArr = [
    name,
    <img className="px-1" src="shop-Icon.png" alt="icon" />,
  ];
  const handelIcon = (x: boolean) => {
    if (!x) return iconArr;
    return iconArr.reverse();
  };

  return (
    <>
      <div className="mb-3 ms-5">
        {/* <p>{"<Button "+description+" />"}</p> */}
        <button className={"btn btn-" + variant} disabled={Disabled}>
          {!endIcon && !startIcon ? name : handelIcon(startIcon)}
        </button>
      </div>
    </>
  );
}

export default Button;
