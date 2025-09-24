// import { Component } from 'react'
import './App.css'

// class App extends Component{
//   render() {
//     return <div>안녕하세요!</div>;
//   }
// }

// 화면에 출력하는 HTML은 return을 사용해줘야하며 2개이상부터는 ()안에 그리고 최상위 요소로 묶어줘야함 최상위 요소 떄문에 낭비되는 태그를 위해 빈 태그를 사용해도 됨

// function App() {
//   const a = "변수입니다."
//   return (
//   <>
//   <div>함수형 컴포넌트입니다!
//     <span>{a.split("").join(" ")}</span>
//   </div>
//   <div>함수형 컴포넌트입니다!
//     <span>자식 요소도 있습니다!</span>
//   </div>
//   </>
//   );
// }

function App() {
  return (
    <>
      <CheeseBurger />
    </>
  );
};

function CheeseBurger() {
  return (
  <>
    <Bread />
    <Beef />
    <Leap />
    <Cheese />
    <Bread />
  </>
  );
};

function Bread() {
  return (
    <div className='bread'>
        밀가루
        <span> 물</span>
        <span> 계란</span>
        <span> 이스트</span>
      </div>
  );
};

function Beef() {
  return(
    <div className='beef'>
        소고기
        <span> 후추</span>
        <span> 소금</span>
      </div>
  );
};

function Leap() {
  return (    
    <div className='leap'>
        잎사귀
        <span> 줄기</span>
      </div>
  );
};

function Cheese() {
  return (
    <div className='cheese'>
        우유
        <span> 소금</span>
        <span> 색소</span>
      </div>
  );
};



export default App
