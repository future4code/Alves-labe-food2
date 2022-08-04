import { useEffect } from "react";
import { useNavigate } from "react-router";
import { goToLogin } from "../router/coordenator";

const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goToLogin(navigate);
    }
  }, [navigate]);
};

export default useProtectedPage;
