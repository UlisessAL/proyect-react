import { useState } from "react"
import InputForm from "./InputForm/InputForm";
import "../../../css/FormCheckout.css"

const FormCheckout = (props) => {

    const [userData, setUserData] = useState({name : "", email:"", phone:""});

    let formFields = Object.keys(userData);

    const inputValue = (evt) => {
        let value = evt.target.value;
        let inputName = evt.target.name;

        let newState = {...userData};

        newState[inputName] = value;
        setUserData(newState);
    }

    const validateForm = () => {
        return !(userData.name !== "" && userData.email !== "" && userData.phone !== "")
    }

    const submitForm = (evt) => {
        evt.preventDefault();
    }

    return (
    <>

        <div className="formulary">
        
            <div className="h2-div-form">
                <h2 className="h2-form">Completa este formulario para finalizar la compra</h2>
            </div>
            
            <form onSubmit={submitForm} className="form">

                {formFields.map(field => (
                    <InputForm key={field} onChange={inputValue} name={field} value={userData[field]} label={userData[field]} />
                ))   }

                <button type="submit" className="btn end-purchase" disabled={validateForm()} onClick={(evt) => props.handleCheckout(evt,userData)}>Finalizar Compra</button>

            </form>

        </div>    
    </>
    )
}
export default FormCheckout