const userNameInput = document.getElementById("username") as HTMLInputElement;
const loginButton = document.getElementById("login-btn") as HTMLButtonElement;
const greetingMsg = document.getElementById("greeting-msg") as HTMLParagraphElement;

loginButton?.addEventListener("click", () => {
  const enteredName = userNameInput.value;

  if (enteredName) {
    greetingMsg.innerText = `반갑습니다, ${enteredName}님! 👋`;
    userNameInput.value = "";
  } else {
    alert("이름을 입력해주세요!");
  }
});