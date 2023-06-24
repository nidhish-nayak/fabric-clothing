import styled from "styled-components";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  h2 {
    margin-bottom: 1em;
  }

  button {
    margin-top: 1em;
  }

  @media(max-width: 768px) {
    height: 100px;
    min-width: 360px;
  }

  @media(max-width: 400px) {
    height: 100px;
    min-width: 260px;
  }
` 