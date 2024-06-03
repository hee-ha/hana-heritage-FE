import Cookies from "js-cookie";

export const signIn = (data) => {
  Cookies.set("auth", JSON.stringify(data));
};

export const signOut = () => {
  Cookies.remove("auth");
};

export const getAuth = () => {
  const auth = Cookies.get("auth");
  return auth ? JSON.parse(auth) : null;
};
