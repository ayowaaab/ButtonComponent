import Button from "./componnents/Button";

function App() {
  return (
    <div>
      <h1 className="mb-5">Buttons</h1>
        <Button />
        <Button color="primary" variant="outline" disableShadow={true} />
        <Button variant="text" />
        <Button color = "primary"  disableShadow={true} />


      <div className="d-flex ">
        <Button />
        <Button color="secondary" />
        <Button color="primary" />
        <Button color="danger" />
      </div>
    </div>
  );
}

export default App;
