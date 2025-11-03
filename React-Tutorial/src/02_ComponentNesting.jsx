export default function Menu() {
  return (
    <>
      <Burger />
    </>
  );
}

function Burger() {
  return (
    <>
      <Bread />
      <Beef />
      <Leap />
      <Bread />
    </>
  );
}

function Bread() {
  return (
    <div className="bread">
      밀가루
      <span> 물</span>
      <span> 계란</span>
      <span> 이스트</span>
    </div>
  );
}

function Beef() {
  return (
    <div className="beef">
      소고기
      <span> 후추</span>
      <span> 소금</span>
    </div>
  );
}

function Leap() {
  return (
    <div className="leap">
      잎사귀
      <span> 줄기</span>
    </div>
  );
}