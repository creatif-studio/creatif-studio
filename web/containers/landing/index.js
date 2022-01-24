import React from "react";
import Navbar from "./components/Navbar";
import Modal from "components/Modal";
import ContactForm from "./components/ContactForm";
import { Main, Provider, Feature, Invitation, About, Footer } from "./sections";
import { useContact } from "hooks/contact";
import useNotif from "hooks/notif";

export default function Landing() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const notif = useNotif();
  const { contact } = useContact();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleContact = async (values) => {
    try {
      await contact.mutateAsync(values);
      notif.success("Email sent.");
      setOpen(false);
    } catch (error) {
      console.log(error.response);
      switch (error.response?.status) {
        case 553:
          setMessage("Your email failed to send. Please try again.");
          break;
        default:
          setMessage("Internal server error");
          break;
      }
      notif.error(message);
    }
  };

  return (
    <>
      <Navbar openContactUs={handleOpen} />
      <Main />
      <Provider />
      <Feature />
      <Invitation />
      <About openContactUs={handleOpen} />
      <Footer />
      <Modal open={open} keepOnClickAway handleClose={handleClose}>
        <ContactForm onSubmit={handleContact} isLoading={contact.isLoading} />
      </Modal>
    </>
  );
}
