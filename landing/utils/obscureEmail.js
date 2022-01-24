const obscure = (string) => string[0] + string.substring(1).replace(/./gi, "*");

export default function obscureEmail(email) {
  const split = email.split("@");
  const split2 = split[1].split(".");
  const obscured =
    obscure(split[0]) + "@" + obscure(split2[0]) + "." + obscure(split2[1]);
  return obscured;
}
