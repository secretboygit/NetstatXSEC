import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Scene3D from "./Scene3D";

import achievement1 from "./assets/gallery/achievements/pic1.jpg";
import fun1 from "./assets/gallery/fun/pic1.jpg";
import hardware1 from "./assets/gallery/hardware/pic1.jpg";
import client1 from "./assets/gallery/clients/pic1.jpg";
import ai1 from "./assets/gallery/ai-workflow/pic1.jpg";

const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORMSPREE_ID";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/projects", label: "Projects" },
  { path: "/services", label: "Services" },
  { path: "/gallery", label: "Gallery" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const skills = [
  { icon: "🛡️", title: "Red Teaming", text: "Recon, web testing workflow, attack simulation and security research mindset." },
  { icon: "🐧", title: "Linux & Networking", text: "Linux administration, TCP/IP, DNS, troubleshooting and server basics." },
  { icon: "🔎", title: "OSINT", text: "Domain intelligence, public data research, business profiling and automation." },
  { icon: "⚙️", title: "Tool Development", text: "Python CLI tools, automation systems, dashboards and repeatable workflows." },
  { icon: "🔬", title: "Hardware Hacking", text: "Embedded experiments, device analysis, custom hardware tools and labs." },
  { icon: "🧩", title: "Cyber Project Development", text: "Custom security tools, automation workflows, labs, dashboards and practical technical systems." },
];

function useHashRoute() {
  const getRoute = () => window.location.hash.replace("#", "") || "/";
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const go = (path) => {
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return [route, go];
}

function SkillCard({ icon, title, text }) {
  return (
    <div className="card tilt">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Home({ go }) {
  const [typed, setTyped] = useState("");
  const text = "Offensive Security Specialist • Hardware Hacker • Security Researcher • Tool Developer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTyped(text.slice(0, i));
      i++;
      if (i > text.length) i = 0;
    }, 55);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <section className="hero reveal">
        <div className="heroLeft">
          <h1>
            Hire  Hacker
            <br />
            <span className="redText">Offensive Security</span> Specialist
          </h1>

          <p className="typing">
            {typed}
            <span className="cursor">|</span>
          </p>

          <p className="desc">
            I build offensive security tools, OSINT systems, automation workflows,
            hardware hacking labs and premium client-ready websites.
          </p>

          <div className="buttons">
            <button className="btn primary" onClick={() => go("/portfolio")}>
              View Portfolio
            </button>

            <button className="btn ghost" onClick={() => go("/contact")}>
              Contact Me
            </button>
          </div>

          <div className="trustStrip">
            <span>⚡ Cyber Tools</span>
            <span>🧠 AI Workflow</span>
            <span>🔬 Hardware Labs</span>
          </div>

          <div className="stats">
            <div><h3>6+</h3><p>Project Areas</p></div>
            <div><h3>3D</h3><p>Premium UI</p></div>
            <div><h3>PRO</h3><p>Cyber Profile</p></div>
          </div>
        </div>

        <div className="heroRight">
          <div className="securityPanel glass3d">
            <div className="panelHeader">
              <span>LIVE SECURITY CONSOLE</span>
              <b>ONLINE</b>
            </div>

            <div className="terminal">
              <div className="terminalTop">
                <span></span><span></span><span></span>
              </div>

              <div className="terminalBody">
                <p><b>$</b> whoami</p>
                <h3>Mr.Mystix / Offensive Security / Builder</h3>

                <p><b>$</b> profile --load</p>
                <h3>Offensive Security • OSINT • Hardware</h3>

                <p><b>$</b> mission --run</p>
                <h3>Build practical systems that create value.</h3>

                <div className="scanLine"></div>
              </div>
            </div>

            <div className="miniCards">
              <div><strong>Mode</strong><span>Research</span></div>
              <div><strong>Status</strong><span>Available</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <p className="sectionTag">CAPABILITIES</p>
        <h2>Core Skills</h2>

        <div className="grid">
          {skills.map((item) => (
            <SkillCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}

function Portfolio() {
  const portfolioCards = [
    {
      title: "Offensive Security",
      text: "Web application testing, recon workflow, attack surface analysis and practical red team methodology.",
    },
    {
      title: "Custom Tool Development",
      text: "Python-based CLI tools, OSINT systems, automation workflows, dashboards and repeatable security utilities.",
    },
    {
      title: "Hardware Hacking",
      text: "Embedded experiments, device analysis, physical security concepts and custom hardware security labs.",
    },
    {
      title: "Linux & Infrastructure",
      text: "Linux administration, server setup, networking basics, troubleshooting and deployment workflow.",
    },
    {
      title: "OSINT Intelligence",
      text: "Domain profiling, public data research, business intelligence and automated information collection.",
    },
    {
      title: "AI + Automation",
      text: "Personal AI assistant workflows, memory systems, automation commands and productivity-focused tools.",
    },
  ];

  return (
    <div className="section">
      <h2>Portfolio</h2>

      <p className="desc" style={{ textAlign: "center", margin: "0 auto 50px" }}>
        ZeroTrace is focused on offensive security, custom tools, automation,
        OSINT intelligence, Linux systems and practical cybersecurity research.
      </p>

      <div className="grid">
        <div className="card tilt">
          <h3>Mr.Mystix</h3>
          <p>
            Offensive Security Specialist and Hardware Hacker focused on building
            practical cyber tools, labs, dashboards and real-world technical systems.
          </p>
        </div>

        <div className="card tilt">
          <h3>Mission</h3>
          <p>
            To create useful security-focused products that help businesses,
            learners and technical teams understand, automate and secure systems.
          </p>
        </div>

        <div className="card tilt">
          <h3>Brand</h3>
          <p>
            ZeroTrace represents clean execution, stealth mindset, technical depth
            and professional offensive security research.
          </p>
        </div>
      </div>

      <div className="section" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <p className="sectionTag">CAPABILITY MATRIX</p>
        <h2>Technical Focus</h2>

        <div className="grid">
          {portfolioCards.map((item) => (
            <div className="card tilt" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card tilt" style={{ marginTop: "40px" }}>
        <h3>Professional Summary</h3>
        <p>
          I work on practical cybersecurity systems including recon tools, OSINT
          automation, Linux workflows, hardware hacking experiments, AI assistant
          systems and premium technical websites. My focus is not only learning,
          but building real products that solve real problems.
        </p>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    ["🤖 Rubbina AI", "Personal AI assistant with CLI workflow, memory, provider routing and automation commands."],
    ["🔎 AstraOSINT", "Domain intelligence system for DNS, WHOIS and target profiling."],
    ["🪄 Lead Intelligence Tool", "Automated lead finder for businesses that need websites and software."],
    ["📈 MetaMind", "Network behavior dashboard concept for traffic visibility and device activity intelligence."],
    ["📱 Android Recovery Research", "ADB-based Android analysis experiments focused on permission-respecting workflow."],
    ["🪛 Hardware Experiments", "Custom hardware security experiments, physical security concepts and embedded research."],
  ];

  return (
    <div className="section">
      <h2>Projects</h2>

      <div className="grid">
        {projects.map(([title, text]) => (
          <div className="card tilt" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Services() {
  const services = [
    ["🛡️", "Cybersecurity Projects", "Recon tools, OSINT systems, security dashboards, lab environments and reporting workflows."],
    ["⚙️", "Custom Automation Tools", "Python utilities, lead systems, data extractors, CSV/Excel automation and CLI tools."],
    ["🌐", "Websites & Portfolios", "Premium websites, landing pages, personal portfolios and client-ready UI systems."],
    ["💼", "Business Software", "CRM-style panels, admin dashboards, enquiry systems, booking flows and internal tools."],
    ["🤖", "AI Assistant Projects", "Personal assistant interfaces, chatbot workflows, AI routing and productivity automation."],
    ["🐧", "Linux & Server Setup", "Linux setup, server basics, deployment support, troubleshooting and documentation."],
  ];

  return (
    <div className="section">
      <h2>Services</h2>

      <p className="desc" style={{ textAlign: "center", margin: "0 auto 40px" }}>
        Premium technical services for cybersecurity, automation, websites, AI, Linux and business systems.
      </p>

      <div className="grid">
        {services.map(([icon, title, text]) => (
          <div className="card tilt servicePremium" key={title}>
            <div className="icon">{icon}</div>
            <h3>{title}</h3>
            <p>{text}</p>
            <small style={{ color: "#00ff73", fontWeight: "800" }}>Premium Delivery →</small>
          </div>
        ))}
      </div>
    </div>
  );
}

function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    ["01", "Achievements", "Photo highlights and achievement moments.", "image", achievement1],
    ["02", "Fun", "Casual and fun moments.", "image", fun1],
    ["03", "Hardware Experiments", "Hardware hacking labs and physical device experiments.", "image", hardware1],
    ["04", "Clients Projects", "Client work and project showcase.", "image", client1],
    ["05", "AI Workflow", "AI assistant workflow and automation setup.", "image", ai1],
  ];

  return (
    <div className="section">
      <h2>Gallery</h2>

      <p className="desc" style={{ textAlign: "center", margin: "0 auto 40px" }}>
        Visual-style highlights of labs, tools, experiments and premium technical builds.
      </p>

      <div className="grid">
        {items.map(([number, title, text, type, src]) => (
          <div
            className="card tilt galleryPremium"
            key={title}
            onClick={() => setSelectedItem({ title, type, src })}
            style={{ cursor: "pointer" }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "20px",
                background: "linear-gradient(135deg,#00ff73,#00b7ff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                fontWeight: "900",
                color: "#001b0b",
                marginBottom: "22px",
                boxShadow: "0 0 25px rgba(0,255,120,0.25)",
              }}
            >
              {number}
            </div>

            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 9999999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            backdropFilter: "blur(14px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(900px, 95vw)",
              background: "rgba(0,0,0,0.75)",
              border: "1px solid rgba(0,255,120,0.25)",
              borderRadius: "28px",
              padding: "24px",
              boxShadow: "0 0 50px rgba(0,255,120,0.2)",
              position: "relative",
            }}
          >
            <button
              onClick={() => setSelectedItem(null)}
              style={{
                position: "absolute",
                top: "12px",
                right: "18px",
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "32px",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <h2 style={{ color: "#00ff73", marginBottom: "20px" }}>
              {selectedItem.title}
            </h2>

            {selectedItem.type === "video" ? (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                style={{
                  width: "100%",
                  maxHeight: "70vh",
                  borderRadius: "18px",
                }}
              />
            ) : (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                style={{
                  width: "100%",
                  maxHeight: "70vh",
                  objectFit: "contain",
                  borderRadius: "18px",
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function About() {
  return (
    <div className="section">
      <h2>About</h2>

      <p className="desc" style={{ textAlign: "center", margin: "0 auto 40px" }}>
        A practical cybersecurity learner and builder focused on real skills,
        real labs and create useful products.
      </p>

      <div className="grid">
        <div className="card tilt">
          <h3>Builder Mindset</h3>
          <p>I focus on building real tools, testing ideas, debugging systems and improving security workflows step by step.</p>
        </div>

        <div className="card tilt">
          <h3>Cybersecurity Focus</h3>
          <p>Red teaming fundamentals, Linux systems, OSINT automation, web security and hardware security experiments.</p>
        </div>

        <div className="card tilt">
          <h3>Practical Approach</h3>
          <p>My goal is to turn technical knowledge into practical tools, training labs and client-ready systems.</p>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="section">
      <h2>Contact</h2>

      <p
        className="desc"
        style={{
          textAlign: "center",
          width: "100%",
          margin: "0 auto 40px",
        }}
      >
        Connect with me through WhatsApp, LinkedIn, GitHub or Email.
      </p>

      <div className="socialGrid">
        <a href="https://wa.me/919981188072" target="_blank" rel="noreferrer">
  WhatsApp
</a>

<a href="https://www.linkedin.com/in/madhur-patidar-5b82b0256/" target="_blank" rel="noreferrer">
  LinkedIn
</a>

<a href="https://github.com/secretboygit" target="_blank" rel="noreferrer">
  GitHub
</a>

<a href="mailto:mr.mystix06@gmail.com">
  Email
</a>
      </div>
    </div>
  );
}

function ProjectPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const submitted = localStorage.getItem("projectFormSubmitted");

    if (submitted) return;

    const interval = setInterval(() => {
      setShow(true);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "520px",
        maxWidth: "calc(100vw - 40px)",
        background: "rgba(0,0,0,0.55)",
        border: "1px solid rgba(0,255,120,0.25)",
        borderRadius: "24px",
        padding: "28px",
        zIndex: 999999,
        boxShadow: "0 0 45px rgba(0,255,120,0.15)",
        backdropFilter: "blur(20px)",
      }}
    >
      <button
        onClick={() => setShow(false)}
        style={{
          position: "absolute",
          top: "10px",
          right: "15px",
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "28px",
          cursor: "pointer",
        }}
      >
        ×
      </button>

      <h2 style={{ color: "#00ff73", fontSize: "30px", marginBottom: "12px" }}>
        ZeroTrace
      </h2>

      <p style={{ color: "#e8fff0", lineHeight: "1.6", fontSize: "15px", marginBottom: "18px" }}>
        Use this form for websites, automation systems, cybersecurity labs,
        portfolio work and technical projects.
      </p>

      <form
        className="contactForm"
        action={FORMSPREE_URL}
        method="POST"
        onSubmit={() => {
          localStorage.setItem("projectFormSubmitted", "true");
          setShow(false);
        }}
        style={{ display: "grid", gap: "14px" }}
      >
        <div className="formRow">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
        </div>

        <div className="formRow">
          <select name="project_type" required defaultValue="">
            <option value="" disabled>Project Type</option>
            <option>Website Development</option>
            <option>Automation Tool</option>
            <option>Cybersecurity Lab</option>
            <option>Portfolio Website</option>
            <option>Other</option>
          </select>

          <select name="budget_range" required defaultValue="">
            <option value="" disabled>Budget Range</option>
            <option>₹5,000 - ₹15,000</option>
            <option>₹15,000 - ₹50,000</option>
            <option>₹50,000+</option>
          </select>
        </div>

        <textarea
          name="message"
          placeholder="Tell me about your project..."
          required
          style={{ minHeight: "120px" }}
        ></textarea>

        <button className="btn primary" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default function App() {
  const [route, go] = useHashRoute();

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  const Page = useMemo(() => {
    if (route === "/portfolio") return <Portfolio />;
    if (route === "/projects") return <Projects />;
    if (route === "/services") return <Services />;
    if (route === "/gallery") return <Gallery />;
    if (route === "/about") return <About />;
    if (route === "/contact") return <Contact />;

    return <Home go={go} />;
  }, [route]);

  return (
    <div className="site">
      <Scene3D />

      <div
        className="mouseGlow"
        style={{
          left: mouse.x + "px",
          top: mouse.y + "px",
        }}
      />

      <div className="noise"></div>
      <div className="gridBg"></div>

      <nav className="nav glassNav">
        <button className="logo" onClick={() => go("/")}>
          <span>ZeroTrace</span>SEC
        </button>

        <div className="links">
          {navItems.map((item) => (
            <button
              key={item.path}
              className={route === item.path ? "active" : ""}
              onClick={() => go(item.path)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button className="navCta" onClick={() => go("/contact")}>
          Start Project
        </button>
      </nav>

      {Page}

      <ProjectPopup />
    </div>
  );
}