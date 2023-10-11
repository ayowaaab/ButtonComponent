import './Inputs.css'

interface Props{
  color?: string; 
  isDisabled?: boolean;


}

function Inputs({color="",isDisabled=false}:Props) {
  return (
    <>
      <label htmlFor='inputField'>Label</label>
      <br />
      <input id='inputField' className={"input "+color} disabled={isDisabled} type="text" placeholder="Placeholder"  />
    </>
  )
}

export default Inputs;