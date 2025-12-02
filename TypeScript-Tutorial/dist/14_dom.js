const userNameInput = document.getElementById("username");
const loginButton = document.getElementById("login-btn");
const greetingMsg = document.getElementById("greeting-msg");
loginButton === null || loginButton === void 0 ? void 0 : loginButton.addEventListener("click", () => {
    const enteredName = userNameInput.value;
    if (enteredName) {
        greetingMsg.innerText = `반갑습니다, ${enteredName}님! 👋`;
        userNameInput.value = "";
    }
    else {
        alert("이름을 입력해주세요!");
    }
});
export {};
