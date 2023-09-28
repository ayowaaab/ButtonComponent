import Button from "./componnents/Button";

function App() {
  return (
    <div>
      <main>
        <h1 className="mb-5 mt-5">Buttons</h1>
        <Button name="Default" variant="outline" />
        <Button name="Default" variant="outline" color="primary" />
      </main>
    </div>
  );
}

export default App;
