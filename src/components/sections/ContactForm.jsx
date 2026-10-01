"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { profile } from "../../utils/constants";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const ContactForm = () => {
  const [status, setStatus] = useState("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    if (!formspreeId) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\n${data.name} <${data.email}>`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="contact-form__row">
        <label>
          <span className="sr-only">Name</span>
          <input
            type="text"
            placeholder="Name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name", { required: "Please enter your name" })}
          />
          {errors.name && <span className="form-error">{errors.name.message}</span>}
        </label>
        <label>
          <span className="sr-only">Email</span>
          <input
            type="email"
            placeholder="Email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email", {
              required: "Please enter your email",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email" },
            })}
          />
          {errors.email && <span className="form-error">{errors.email.message}</span>}
        </label>
      </div>
      <label>
        <span className="sr-only">Message</span>
        <textarea
          rows={5}
          placeholder="Tell me more about your needs..."
          aria-invalid={!!errors.message}
          {...register("message", { required: "Please write a message" })}
        />
        {errors.message && <span className="form-error">{errors.message.message}</span>}
      </label>
      <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      <p className="contact-form__status" role="status">
        {status === "sent" && "Thanks! Your message has been sent."}
        {status === "error" && "Something went wrong. Please email me directly."}
      </p>
    </form>
  );
};

export default ContactForm;
