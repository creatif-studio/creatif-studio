import cookie from "cookie";
import Cookies from "js-cookie";

function getCookie(data, name) {
  const val = Cookies.get(name);
  const v = cookie.parse(data?.headers?.cookie || "");

  let value = undefined;
  if (Object.keys(v).length > 0) {
    value = v[name];
  } else {
    value = val;
  }

  return value;
}

export default getCookie;
