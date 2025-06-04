import Cookies from "js-cookie";

export const logoutAndRedirect = () => {
  Cookies.remove("token");
  window.location.href = "/login";
};
