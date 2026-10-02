import Demo from "../components/Demo";
import { Nav, ContactForm } from "../components/Client";
import { SITE, projects, services, stack, process, principles } from "../lib/data";
export default function Page() {
    const ld = [
        { 
            "@context": "https://schema.org", 
            "@type": "Person", 
            name: SITE.name, 
            url: SITE.url, 
            jobTitle: "Full Stack Web Developer", 
            address: { 
                "@type": "PostalAddress", 
                addressLocality: "Delhi", 
                addressCountry: "IN" }, 
                knowsAbout: stack, 
                sameAs: [
                    SITE.linkedin, 
                    SITE.github
                ] 
        }, 
        { 
            "@context": "https://schema.org", 
            "@type": "WebSite", 
            name: "Mohd. Daaim Khan – Web Developer", 
            url: SITE.url 
        }
    ];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

            <Nav /><main id="top">
                <section className="hero"><div className="aur" /><div className="w hg"><div>
                    <p className="badge"><span className="dot" />Open for new projects</p>
                    <h1>Turning Business Bhallenges into <span className="gt">Scalable Digital Solutions</span></h1>
                    <p className="lead">As a full stack web developer based in Delhi, I build high-performance websites and custom business platforms that streamline operations, strengthen your digital presence and grow with your business.</p>
                    <div className="cta"><a className="btn p" href="#work">View selected work</a><a className="btn" href="#contact">Start a project</a></div></div>
                    <Demo p={projects[1]} priority /></div>
                </section>
                <section id="work"><div className="w"><p className="eyebrow">Selected work</p><h2>Live product previews, <span className="gt">not screenshots</span></h2><p className="mut sub">Each card is an interactive simulation of the real project type — pause it, zoom in, and see the flow.</p>
                    <div className="pg">{projects.map(p => <article key={p.id} id={p.id} className="pc"><Demo p={p} /><div className="pi"><p className="eyebrow">{p.cat}</p><h3>{p.n}</h3><p className="mut">{p.out}</p><div className="chips">{p.stack.map(s => <span key={s}>{s}</span>)}</div><a className="lnk" href="#contact">Discuss a similar system →</a></div></article>)}</div>
                    <div className="mid"><a className="btn p" href="#contact">Start a project</a></div></div>
                </section>
                <section id="services"><div className="w"><p className="eyebrow">Services</p><h2>What I <span className="gt">build</span></h2>
                    <div className="sg">{services.map(([t, d, l]) => <a key={t} href={"#" + l} className="sv"><h3>{t}</h3><p className="mut">{d}</p><span>See related project →</span></a>)}</div></div>
                </section>
                <section><div className="w"><p className="eyebrow">Capabilities</p><h2>Technology <span className="gt">stack</span></h2><div className="chips big">{stack.map(s => <span key={s}>{s}</span>)}</div>
                    <p className="mut sub">Complete business-facing web systems — not just pages. About 3 years of hands-on development, an MCA from Chandigarh University, Currently working at <a href="https://marketingraisers.com/" target="_blank">Marketing Raisers</a> and taking on freelance projects.</p></div>
                </section>
                <section id="process"><div className="w"><p className="eyebrow">Process</p><h2>How projects are <span className="gt">delivered</span></h2>
                    <ol className="sg pr">{process.map(([t, d], i) => <li key={t} className="sv"><b className="num">0{i + 1}</b><h3>{t}</h3><p className="mut">{d}</p></li>)}</ol>
                    <h2 style={{ marginTop: 70 }}>Quality <span className="gt">principles</span></h2><div className="sg">{principles.map(([t, d]) => <div key={t} className="sv"><h3>{t}</h3><p className="mut">{d}</p></div>)}</div></div>
                </section>
                <section id="contact"><div className="w cg"><div><p className="eyebrow">Contact</p><h2>Have a project in mind? <span className="gt">Let's talk.</span></h2><p className="mut sub">Tell me briefly what you need — I'll reply with next steps.</p>
                    <div className="cta"><a className="btn p" href={`mailto:${SITE.email}`}>Email</a><a className="btn" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a className="btn" href={SITE.github} target="_blank" rel="noopener noreferrer">GitHub</a>{SITE.whatsapp && <a className="btn" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>}</div></div><ContactForm /></div>
                </section>
            </main>

            <footer>
                <div className="w fw">
                    <span>© {new Date().getFullYear()} Mohd. Daaim Khan · Web Developer</span>
                    <span><a href="#work">Work</a> · <a href="#services">Services</a> · <a href="#contact">Contact</a></span>
                </div>
            </footer>
        </>
    )
}
