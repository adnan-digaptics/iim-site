"use client";

import { useState } from "react";

const EMAIL = "contact@medicineandislam.org";

const SUBJECTS = [
  ["general", "General Inquiry"],
  ["partnership", "Partnership Opportunity"],
  ["research", "Research Collaboration"],
  ["education", "Educational Programs"],
  ["consultation", "Consultation Services"],
  ["speaking", "Speaking & Workshops"],
  ["media", "Media & Press"],
  ["other", "Other"],
];

const EMPTY = {
  firstName: "",
  lastName: "",
  email: "",
  affiliation: "",
  subject: "",
  message: "",
  company: "",
};

function validate(values) {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = "Enter your first name.";
  if (!values.lastName.trim()) errors.lastName = "Enter your last name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (!values.subject) errors.subject = "Choose a subject.";
  if (!values.message.trim()) errors.message = "Enter your message.";
  else if (values.message.trim().length < 12) errors.message = "Write a little more so the team can respond.";
  return errors;
}

export default function ContactForm({ initialSubject = "" }) {
  const [values, setValues] = useState({ ...EMPTY, subject: initialSubject });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [note, setNote] = useState("");

  function update(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function submit(event) {
    event.preventDefault();
    if (values.company) {
      setStatus("error");
      setNote("This message could not be prepared. Please email the team directly.");
      return;
    }
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      setNote("Please correct the highlighted fields.");
      return;
    }
    const subjectLabel = SUBJECTS.find(([value]) => value === values.subject)?.[1] || values.subject;
    const body = [
      `Name: ${values.firstName.trim()} ${values.lastName.trim()}`,
      `Email: ${values.email.trim()}`,
      values.affiliation.trim() ? `Affiliation: ${values.affiliation.trim()}` : "",
      "",
      values.message.trim(),
    ].filter(Boolean).join("\n");
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(`II&M inquiry: ${subjectLabel}`)}&body=${encodeURIComponent(body)}`;
    setStatus("ready");
    setNote("Your email program is opening with this message addressed to II&M. Send it there to complete your inquiry.");
    window.location.href = href;
  }

  return (
    <form className="ct-form" onSubmit={submit} noValidate>
      <p className="ct-eyebrow">GET IN TOUCH</p>
      <h2>Send Us a Message.</h2>
      <p className="ct-lead">Please fill out the form below and a member of our team will get back to you as soon as possible.</p>
      <div className="ct-pair">
        <Field label="First Name" name="firstName" value={values.firstName} error={errors.firstName} onChange={update} required autoComplete="given-name" />
        <Field label="Last Name" name="lastName" value={values.lastName} error={errors.lastName} onChange={update} required autoComplete="family-name" />
      </div>
      <div className="ct-pair">
        <Field label="Email Address" name="email" type="email" value={values.email} error={errors.email} onChange={update} required autoComplete="email" />
        <Field label="Affiliation (Optional)" name="affiliation" value={values.affiliation} error={errors.affiliation} onChange={update} autoComplete="organization" />
      </div>
      <div className="ct-field">
        <label htmlFor="ct-subject">Subject <span aria-hidden="true">*</span></label>
        <select id="ct-subject" name="subject" value={values.subject} onChange={update} required aria-invalid={errors.subject ? "true" : "false"} aria-describedby={errors.subject ? "ct-subject-error" : undefined} className={errors.subject ? "is-invalid" : undefined}>
          <option value="">Select a subject</option>
          {SUBJECTS.map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        {errors.subject ? <p id="ct-subject-error" className="ct-error">{errors.subject}</p> : null}
      </div>
      <div className="ct-field">
        <label htmlFor="ct-message">Your Message <span aria-hidden="true">*</span></label>
        <textarea id="ct-message" name="message" rows={5} value={values.message} onChange={update} required aria-invalid={errors.message ? "true" : "false"} aria-describedby={errors.message ? "ct-message-error" : undefined} className={errors.message ? "is-invalid" : undefined} placeholder="Tell us how we can help" />
        {errors.message ? <p id="ct-message-error" className="ct-error">{errors.message}</p> : null}
      </div>
      <p className="ct-honey">
        <label htmlFor="ct-company">Company website</label>
        <input id="ct-company" name="company" value={values.company} onChange={update} tabIndex={-1} autoComplete="off" />
      </p>
      <button type="submit" className="btn-seamless-maroon ct-submit">
        SEND MESSAGE <i className="fa-solid fa-arrow-right" aria-hidden="true" />
      </button>
      <p className="ct-privacy">By submitting this form, you agree to be contacted by the II&amp;M team at the email address you provide. This site sends the message through your own email program to {EMAIL}.</p>
      {note ? <p className={`ct-status ct-status-${status}`} role="status">{note}</p> : null}
    </form>
  );
}

function Field({ label, name, type = "text", value, error, onChange, required, autoComplete }) {
  const id = `ct-${name}`;
  return (
    <div className="ct-field">
      <label htmlFor={id}>{label} {required ? <span aria-hidden="true">*</span> : null}</label>
      <input id={id} name={name} type={type} value={value} onChange={onChange} required={required} autoComplete={autoComplete} aria-invalid={error ? "true" : "false"} aria-describedby={error ? `${id}-error` : undefined} className={error ? "is-invalid" : undefined} />
      {error ? <p id={`${id}-error`} className="ct-error">{error}</p> : null}
    </div>
  );
}
