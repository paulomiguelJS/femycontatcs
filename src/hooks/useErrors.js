import { useState } from "react";

export default function useErrors() {
  const [erros, setErros] = useState([]);

  function setError({ field, message }) {
    const errorAlreadyExistis = erros.find((error) => error.field === field);

    if (errorAlreadyExistis) {
      return;
    }
    setErros((prevState) => [...prevState, { field, message }]);
  }

  function removeError(fieldName) {
    setErros((prevState) =>
      prevState.filter((error) => error.field == !fieldName)
    );
  }

  function getErrorMessageByFieldName(fieldName) {
    return erros.find((error) => error.field === fieldName)?.message;
  }
  return {
    setError,
    removeError,
    getErrorMessageByFieldName,
    erros,
  };
}
