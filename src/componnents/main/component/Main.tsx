import Button from "../../Button";
import Inputs from "../../Inputs";

interface Props {
  navType: string;
}

function Main({ navType = "" }: Props) {
  const buttonCompo = (
    <div className="px-5 pt-5">
      
      <h1 className="mb-5">Buttons</h1>
      <Button />
      <Button color="primary" variant="outline" disableShadow={true} />
      <Button variant="text" />
      <Button color="primary" disableShadow={true} />
      <Button Disabled={true} />

      <div className="d-flex">
        <Button startIcon={true} />
        <Button endIcon={true} />
      </div>

      <div className="d-flex">
        <Button />
        <Button color="secondary" />
        <Button color="primary" />
        <Button color="danger" />
      </div>
    </div>
  );

  const inputCompo = (
    <div className="px-5 pt-5">
      <h1 className="mb-5">Inputs</h1>
      <Inputs />
      <Inputs isDisabled={true} />
      <Inputs />
      <Inputs />

      {/* <div className="d-flex ">
        <Inputs />
        <Inputs />
        <Inputs />
        <Inputs />
      </div> */}

    </div>
  );

  if (navType === "Buttons") return buttonCompo;
  if (navType === "Inputs") return inputCompo;

  return (
    <h1 id="Header">
      <span>Welcome</span>To My Project !
    </h1>
  );
}

export default Main;
