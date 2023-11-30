import React, { useState } from "react";
import Form from "../Components/Form";

const Contact = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState("");  

  const onSubmit = (data) => {
    
    console.log("Formulario enviado", data);

    
    setSubmitSuccess(true);
    setSubmittedName(data.name);  
  };

  return (
    <>
      {submitSuccess ? (
        <div>
          <h2>¡Gracias {submittedName}!</h2>
          <p>Te contactaremos lo antes posible</p>
        </div>
      ) : (
        <div>
          <h2>¿Quieres saber más?</h2>
          <p>Envíanos tus preguntas y te contactaremos</p>
          <Form onSubmit={onSubmit} />
        </div>
      )}
    </>
  );
};

export default Contact;


