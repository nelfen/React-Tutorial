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
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const BigTextBigBlueButton = styled(BigBlueButton)`
  font-size: 30px;
  font-weight: 300;
`;

const PropsButton = styled.button`
  background-color: ${(props) => props.backgroundColor || "white"};
  color: ${(props) => props.textColor || "black"};
  padding: ${(props) => props.padding || 0};
  border-radius: ${(props) => props.radius || 0};
  margin: ${(props) => props.margin || 0};
  width: ${(props) => props.width || "auto"};
  font-size: ${(props) => props.fontSize || "auto"};
  font-weight: ${(props) => props.fontWeight || 400};
`;

export default function PropsBlueBtn() {
  return (
    <Container>
      <div>hello</div>
      <BlueButton>파란색 버튼</BlueButton>
      <PropsButton
        backgroundColor="blue"
        textColor="white"
        padding="10px"
        radius="4px"
        margin="10px"
      >
        파란색 버튼
      </PropsButton>
      <BigBlueButton>커다란 파란색 버튼</BigBlueButton>
      <PropsButton
        backgroundColor="blue"
        textColor="white"
        padding="20px"
        radius="4px"
        margin="10px"
        width="300px"
      >
          커다란 파란색 버튼</PropsButton>
      <BigTextBigBlueButton>글자도 커다란 파란색 버튼</BigTextBigBlueButton>
      <PropsButton         
        backgroundColor="blue"
        textColor="white"
        padding="20px"
        radius="4px"
        margin="10px"
        width="300px"
        fontSize="30px"
        fontWeight="300"
      >글자도 커다란 파란색 버튼</PropsButton>
    </Container>
  );
}