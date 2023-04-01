import style from "./style.module.scss";
import { Button } from "../../components";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export const ContactPage = () => {
  const [form, setForm] = useState({ email: "", textarea: "", select: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });

    if (event.target.id === "email" && !isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      className={`${style.contactWrapper} position-relative`}
      id="contact-us"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <span className={style.header}>Contact Us</span>
            <div className={style.headerUnderline}></div>
            {isSubmitted ? (
              <div className={style.sucess_Email}>
                Your email was send succsesfully!
              </div>
            ) : (
              <form
                action="#"
                className={style.formWrapper}
                onSubmit={handleSubmit}
              >
                <select
                  className={`${style.selectBox} w-100 `}
                  onChange={handleChange}
                  value={form.subject}
                  id="select"
                  required
                >
                  <option value="">Subject...</option>
                  <option value="beginner">Beginner</option>
                  <option value="medium">Medium</option>
                  <option value="pro">Pro</option>
                </select>
                <div className={style.space}>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className={`${style.inputs} w-100`}
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    required
                  ></input>
                  {error && <span className={style.error}>{error}</span>}
                </div>
                <textarea
                  className={`${style.textarea} w-100`}
                  placeholder="Write Your Message Here..."
                  onChange={handleChange}
                  id="textarea"
                  required
                ></textarea>
                <Button
                  label="Submit"
                  type="submit"
                  className={`${style.buttonSubmit} py-5`}
                />
              </form>
            )}

            <div className={style.emailContent}>
              <span className={style.mail}>
                Email@Gofit.Com{" "}
                <a href="tel:+12346576" className={style.telephone}>
                  | +12346576
                </a>
              </span>
            </div>

            <div className={`${style.iconsFlex} d-flex align-items-center`}>
              <a href="https://www.instagram.com/" target="_blank">
                <div className={style.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="35px"
                    height="35px"
                    className={style.iconSvg}
                  >
                    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
                  </svg>
                </div>
              </a>
              <a href="https://twitter.com/?lang=en " target="_blank">
                <div className={style.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28px"
                    height="28px"
                    viewBox="0 0 448 512"
                    className={style.iconSvg}
                  >
                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
                  </svg>
                </div>
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <div className={style.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28px"
                    height="28px"
                    viewBox="0 0 448 512"
                    className={style.iconSvg}
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
