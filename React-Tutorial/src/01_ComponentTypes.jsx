import { Component } from 'react';

//class와 함수 화면 출력
class ClassComponent extends Component {
  render() {
    return <div>클래스형 컴포넌트</div>;
  }
}

function FunctionalComponent() {
  const a = "변수입니다.";
  return (
    <>
      <div>
        함수형 컴포넌트입니다!
        <span>{a.split("").join(" ")}</span>
      </div>
    </>
  );
}

export default function ComponentTypes() {
  return (
    <>
      <h2>1. 클래스 vs 함수형 컴포넌트 비교</h2>
      <ClassComponent />
      <FunctionalComponent />
    </>
  );
}

// export default ClassComponent;
// export default FunctionalComponent