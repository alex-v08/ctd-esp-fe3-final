import React from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const[confirm, setConfirm] = useState(true);
  const [mostrarError, setMostrarError] = useState(true);

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();
    setConfirm(true)
    setMostrarError(true)

    if(userName.length<=5){
      setMostrarError(false)

    } else {
      setConfirm(false);
    }

  }
  return (
    <div>
    <form onSubmit={onSubmitForm}>
    <input
          type="text"
          placeholder="Full name"
          value={userName}
          onChange={onChangeUserName}
          />
    <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChangeEmail}
          />

    <button type="submit"> Send </button>
    </form>
      <p hidden= {mostrarError} style={{color:"red"}}>Por favor verifique su informacion nuevamente</p>
      <p hidden={confirm} >Gracias {userName} te contactaremos cuanto antes vía email</p>
    </div>
  );
};

export default Form;
