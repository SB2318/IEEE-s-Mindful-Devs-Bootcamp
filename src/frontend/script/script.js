const container = document.getElementById("container");
const switchToLogin = document.getElementById("switchToLogin");
const switchToSignup = document.getElementById("switchToSignup");
const hiddenBtn1 = document.getElementById("hiddenBtn1");
const hiddenBtn2 = document.getElementById("hiddenBtn2");
const signUp = document.querySelector(".sign-up");
const signIn = document.querySelector(".sign-in");

switchToSignup.addEventListener("click", () =>
  container.classList.add("active")
);
switchToLogin.addEventListener("click", () =>
  container.classList.remove("active")
);


hiddenBtn2.addEventListener("click", () => {
  signUp.style.opacity = "1";
  signIn.style.opacity = "0";
  signUp.style.pointerEvents = "auto";
  signIn.style.pointerEvents = "none";
});

hiddenBtn1.addEventListener("click", () => {
  signUp.style.opacity = "0";
  signIn.style.opacity = "1";
  signUp.style.pointerEvents = "none";
  signIn.style.pointerEvents = "auto";
});

