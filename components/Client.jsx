"use client";
import { useState } from "react";
import { SITE } from "../lib/data";
export function Nav() {
    const [open, setOpen] = useState(false); const [dark, setDark] = useState(true);
    const flip = () => { const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark"; document.documentElement.dataset.theme = t; setDark(t === "dark"); try { localStorage.setItem("theme", t) } catch (e) { } };
    const L = [["Work", "#work"], ["Services", "#services"], ["Process", "#process"], ["Contact", "#contact"]];
    return (<nav className="nav"><div className="w nv"><a href="#top" className="logo">Mohd. Daaim<b>Khan</b></a>
        <div className={"links" + (open ? " open" : "")}>{L.map(([a, h]) => <a key={a} href={h} onClick={() => setOpen(false)}>{a}</a>)}</div>
        <div className="nr"><button className="tg" onClick={flip} aria-label="Switch between dark and light theme" suppressHydrationWarning>◐</button>
            <button className="tg mb" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label="Toggle menu">{open ? "✕" : "☰"}</button></div></div></nav>)
}
export function ContactForm() {
    const go = e => {
        e.preventDefault(); const f = Object.fromEntries(new FormData(e.target));
        const body = `Name: ${f.name}\nEmail: ${f.email}\nCompany: ${f.company || "-"}\nProject type: ${f.type}\nBudget: ${f.budget || "-"}\n\n${f.brief}`;
        location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Project enquiry – " + f.type)}&body=${encodeURIComponent(body)}`
    };
    return (
    <form onSubmit={go} className="form">
        <input name="name" placeholder="Your name" required autoComplete="name" />
        <input name="email" type="email" placeholder="Email" required autoComplete="email" />
        <input name="company" placeholder="Company / business" />
        <select name="type" aria-label="Project type"><option>Business website</option><option>Admin dashboard</option><option>LMS / student portal</option><option>Custom web application</option><option>WordPress / WooCommerce</option></select>
        <textarea name="brief" rows="4" placeholder="Short project brief" required />
        <input name="budget" placeholder="Approx. budget (optional)" /><button className="btn p" type="submit">Send enquiry</button></form>)
}
