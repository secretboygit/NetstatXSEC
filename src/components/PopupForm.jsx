import { useEffect, useState } from "react";

export default function PopupForm() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const submitted = localStorage.getItem("popupSubmitted");

    if (!submitted) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("popupSubmitted", "true");
    setShow(false);
    alert("Form submitted successfully!");
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="popup-close" onClick={() => setShow(false)}>
          ×
        </button>

        <h2>Start Your Project</h2>

        <p>
          Use this form for websites, automation systems, cybersecurity labs,
          portfolio work and technical projects.
        </p>

        <form onSubmit={handleSubmit} className="popup-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />

          <select required>
            <option value="">Project Type</option>
            <option>Website</option>
            <option>Automation System</option>
            <option>Cybersecurity Lab</option>
            <option>Portfolio</option>
            <option>Technical Project</option>
          </select>

          <textarea placeholder="Tell me about your project..." required />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}