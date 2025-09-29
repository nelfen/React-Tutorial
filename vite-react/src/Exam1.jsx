// import { Component } from 'react'
// import './App.css'

//1일차: class와 함수 화면 출력 
class App extends Component{
  render() {
    return <div>안녕하세요!</div>;
  }
}

function App() {
    const a = "변수입니다."
    return (
      <>
      <div>함수형 컴포넌트입니다!
        <span>{a.split("").join(" ")}</span>
      </div>
      <div>함수형 컴포넌트입니다!
        <span>자식 요소도 있습니다!</span>
      </div>
      </>
      );
    }


//2일차: 컴포넌트 사용법
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

//3일차: map과 filter
const fruits = [
  { name:"딸기", color:"빨강", 크기:2 },
  { name:"바나나", color:"노랑", 크기:5 },
  { name:"키위", color:"초록", 크기:3 },
  { name:"사과", color:"빨강", 크기:4 },
  { name:"블루베리", color:"파랑", 크기:1 },
  { name:"오렌지", color:"주황", 크기:4 },
  { name:"포도", color:"보라", 크기:2 },
  { name:"레몬", color:"노랑", 크기:3 },
  { name:"체리", color:"빨강", 크기:2 },
  { name:"수박", color:"초록", 크기:8 },
];

function App() {
  return (
    <>
    {fruits
    .filter((fruit) => fruit.color === "빨강")
    .map((fruit) => (
      <div key={fruit.name}>
        이름: {fruit.name}, 색깔: {fruit.color}, 크기: {fruit.크기}
      </div>
    ))}
    </>
  );
};

// export default App