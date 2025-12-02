// 1. 요소 가져오기
// 그냥 가져오면 TS는 이게 단순한 'HTMLElement'인 줄만 압니다.
const userNameInput = document.getElementById("username") as HTMLInputElement;
const loginButton = document.getElementById("login-btn") as HTMLButtonElement;
const greetingMsg = document.getElementById("greeting-msg") as HTMLParagraphElement;

// 2. 이벤트 리스너 추가
// 버튼이 확실히 존재할 때만 실행하도록 if문이나 ?(옵셔널 체이닝)를 씁니다.
loginButton?.addEventListener("click", () => {
  // 3. 값 가져오기 (.value)
  // 위에서 'as HTMLInputElement'라고 알려줬기 때문에 .value를 쓸 수 있습니다.
  const enteredName = userNameInput.value;

  // 4. 화면 조작하기
  if (enteredName) {
    greetingMsg.innerText = `반갑습니다, ${enteredName}님! 👋`;
    userNameInput.value = ""; // 입력창 비우기
  } else {
    alert("이름을 입력해주세요!");
  }
});