const setID = document.getElementById("LOGIN_ID");
const setPW = document.getElementById("LOGIN_PW");
const login = document.getElementById("LOGIN_BTN");

function condition() {
  if (setID.value === "codemasterox" && setPW.value === "1234") {
    alert("로그인 성공");
  } else {
    alert("로그인 실패");
  }
}

login.addEventListener("click", condition);