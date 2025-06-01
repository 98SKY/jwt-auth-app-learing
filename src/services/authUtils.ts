export const logoutAndRedirect = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; 
  };
  