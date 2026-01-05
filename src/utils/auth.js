// export function setLoginRole(role, btn) {
//   const roleInput = document.getElementById("loginRole");
//   const title = document.getElementById("loginTitle");
//   const desc = document.getElementById("loginDesc");

//   if (!roleInput || !title || !desc) return;

//   roleInput.value = role;

//   document
//     .querySelectorAll(".auth-switch button")
//     .forEach(b => b.classList.remove("active"));

//   btn.classList.add("active");

//   if (role === "trainer") {
//     title.innerText = "Trainer Login";
//     desc.innerText = "Login to manage clients and workouts.";
//   } else {
//     title.innerText = "Member Login";
//     desc.innerText = "Login to access your personalized dashboard.";
//   }
// }

export const loginUser = () => {
  localStorage.setItem("isAuth", "true");
};

export const logoutUser = () => {
  localStorage.removeItem("isAuth");
};

export const isAuthenticated = () => {
  return localStorage.getItem("isAuth") === "true";
};
