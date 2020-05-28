import React from "react";
import axios from "axios"
import styled from "styled-components";

function App(): any {
  const cardInfo = {
    "card": {
      "number": "4111111111111111",
      "expiryMonth": "10",
      "expiryYear": "2020",
      "cvc": "737",
      "holderName": "John Smith"
    },
    "amount": {
      "value": 10000,
      "currency": "USD"
    },
  }
  
  // const sendToServer = () => {
  //   console.log('pressed')
  //   axios.post("/api/health", {
  //     testObj: "test"
  //   })
  // }


  const authorizePayment = () => {
    axios.post("/api/authorizePayment",  {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
  }
  
  return (
    <>
      <TitleWrapper>My Store Front</TitleWrapper>
      <ItemWrapper>
        <div>
          <div>My Store Item</div>
          <div>Price is $15</div>
          <BuyButton1Wrapper onClick={() => authorizePayment()}>Authorize</BuyButton1Wrapper>
        </div>
      </ItemWrapper>
    </>
  );
}

export default App;

const TitleWrapper = styled.div`
  text-align: center;
  font-size: 5em;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const BuyButton1Wrapper = styled.button`
  display: flex;
  justify-content: space-evenly;
`;
