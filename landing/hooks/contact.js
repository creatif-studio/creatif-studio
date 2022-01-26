import { API } from "utils/api";
import { useMutation } from "react-query";

const useContact = () => {
  const contact = useMutation((body) => API.post("/contact", body));

  return {
    contact,
  };
};

export { useContact };
