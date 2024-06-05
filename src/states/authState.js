import Cookies from "js-cookie";

export const signIn = (auth) => {
  Cookies.set("auth", JSON.stringify(auth));
  localStorage.setItem("auth", JSON.stringify(auth));
};

export const getAuth = () => {
  const auth = Cookies.get("auth") || localStorage.getItem("auth");
  return auth ? JSON.parse(auth) : null;
};

export const signOut = () => {
  Cookies.remove("auth");
  localStorage.removeItem("auth");
};
