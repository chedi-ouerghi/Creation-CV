import { Alert, Toast } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Alerterrors = () => {
  const errors = useSelector((state) => state.errorsReducer);

  return (
    <div>
      {errors.map((error, index) => (
        <Toast key={index} status="error" variant="solid">
          <Toast.Header>Error</Toast.Header>
          <Toast.Body>{error.msg}</Toast.Body>
        </Toast>
      ))}
    </div>
  );
};

export default Alerterrors;
