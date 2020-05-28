import React from "react";
import styled from "styled-components";

function App(): any {
  const sendToServer = () => {
    
    console.log('hi I am an API request')
  }
  return (
    <>
      <TitleWrapper>My Store front!</TitleWrapper>
      <ItemWrapper>
        <div>
          <div>Item 1</div>
          <div>My cool item</div>
          <BuyButton1Wrapper onClick={() => sendToServer()}>Press</BuyButton1Wrapper>
        </div>
        {/* <div>
          <div>Item 2</div>
          <div>My cool item</div>
          <BuyButton2Wrapper>Press</BuyButton2Wrapper>
        </div> */}
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

// const BuyButton2Wrapper = styled.button`
//   display: flex;
//   justify-content: space-evenly;
// `;
