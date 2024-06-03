import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { logout, postLogin } from "../apis/authService";
import { useAuthContext } from "../context/authContext";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuthContext();

  return useMutation(postLogin, {
    onSuccess: (data) => {
      setAuth(data);
      navigate("/");
    },
    onError: () => {
      alert("Login failed");
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuthContext();

  return useMutation(logout, {
    onSuccess: () => {
      setAuth(null);
      navigate("/");
    },
    onError: () => {
      alert("Logout failed");
    },
  });
};
