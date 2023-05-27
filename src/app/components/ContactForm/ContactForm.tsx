"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactForm.module.css";
export default function ContactForm() {
  const [state, handleSubmit] = useForm("mgebderg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address:</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" rows={5} />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Send Message
      </button>
    </form>
  );
}
