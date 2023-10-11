import "./NavBar.css";

interface Props {
  onClickMe: (x: string) => void;
  typeOne:string ;
}

function NavBar({ onClickMe ,typeOne}: Props) {
  const navLists = ["Home","Buttons", "Inputs"];

  return (
    <div className="col-2">
      <nav className="px-2 pt-2">
        <h5>
          <span>Dev</span>Challenges.io
        </h5>
        <ul className="MyList">
          {navLists.map((item) => (
            <li className={ item === typeOne?'active':''} key={item} onClick={() => onClickMe(item)}>{item}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
