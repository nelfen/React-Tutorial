import "./App.scss";
import styled from "styled-components";

const BlueButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 4px;
  margin: 10px;
`;

const BigBlueButton = styled(BlueButton)`
  width: 300px;
  padding: 20px;
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const BigTextBigBlueButton = styled(BigBlueButton)`
  font-size: 30px;
  font-weight: 300;
`

export default function BlueBtn() {
  return (
    <>
      <Container>
        <div>hello</div>
        <BlueButton>파란색 버튼</BlueButton>
        <BigBlueButton>커다란 파란색 버튼</BigBlueButton>
        <BigTextBigBlueButton>글자도 커다란 파란색 버튼</BigTextBigBlueButton>
      </Container>
    </>
  );
}