// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ese-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// La ilahe illallah
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
"use client";
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch("/api/mmmpeyam", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        setError(data.error || "Peyam nehat şandin.");
      }
    } catch {
      setError("Serverê nikare gihîje.");
    }
  };

  return (
    <Form
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        background: "#fff",
        color: "#495057",
        borderRadius: "18px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        padding: "32px 28px",
        border: "1px solid #e9ecef",
      }}
      onSubmit={handleSubmit}
    >
      {submitted && (
        <Alert variant="success" style={{ borderRadius: "12px", textAlign: "center" }}>
          Peyama te bi serfirazî hat şandin!
        </Alert>
      )}
      {error && (
        <Alert variant="danger" style={{ borderRadius: "12px", textAlign: "center" }}>
          {error}
        </Alert>
      )}
      <h2
        className="mb-4 text-center"
        style={{
          fontWeight: 700,
          color: "#28a745",
          letterSpacing: "1px",
          fontSize: "2rem",
        }}
      >
        Têkilî
      </h2>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label style={{ color: "#495057", fontWeight: 500 }}>Nav</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            borderRadius: "10px",
            border: "1px solid #ced4da",
            boxShadow: "none",
            transition: "border-color 0.2s",
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label style={{ color: "#495057", fontWeight: 500 }}>E-name</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            borderRadius: "10px",
            border: "1px solid #ced4da",
            boxShadow: "none",
            transition: "border-color 0.2s",
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label style={{ color: "#495057", fontWeight: 500 }}>Peyama te</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          style={{
            borderRadius: "10px",
            border: "1px solid #ced4da",
            boxShadow: "none",
            resize: "vertical",
            transition: "border-color 0.2s",
          }}
        />
      </Form.Group>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{
            backgroundColor: "#28a745",
            borderColor: "#28a745",
            borderRadius: "8px",
            padding: "10px 36px",
            fontWeight: 600,
            fontSize: "1.1rem",
            letterSpacing: "1px",
            boxShadow: "0 2px 8px rgba(40,167,69,0.08)",
            transition: "background 0.2s, box-shadow 0.2s",
          }}
          variant="success"
          type="submit"
        >
          Bişîne
        </Button>
      </div>
      <p className="text-center mt-4" style={{ color: "#6c757d", fontSize: "1rem" }}>
        Ji bo têkilî, forma jorê bişopînin. Em ê herî zû bi we re têkilî daynin.
      </p>
    </Form>
  );
};

export default ContactForm;