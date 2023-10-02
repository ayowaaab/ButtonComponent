import Button from "../../Button";

interface Props {
  Type?: string;
}

function Main({ Type }: Props) {
    
  return (
    <div className="px-5 pt-5">
      <h1 className="mb-5">Buttons</h1>
      <Button />
      <Button color="primary" variant="outline" disableShadow={true} />
      <Button variant="text" />
      <Button color="primary" disableShadow={true} />

      <div className="d-flex ">
        <Button />
        <Button color="secondary" />
        <Button color="primary" />
        <Button color="danger" />
      </div>
    </div>
  );
}

export default Main;
