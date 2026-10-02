"use client";
import { useEffect, useRef, useState } from "react";
const DASH = ["nav1", "row0", "open", "close", "f1", "nav2", "row1"], SITE = ["row1", "f1", "open", "close", "nav2", "row0", "nav1"];
const W = 560, H = 350;
const apply = (s, t) => t.startsWith("nav") ? { ...s, nav: +t[3], modal: false } : t.startsWith("row") ? { ...s, sel: +t[3] } : t[0] === "f" ? { ...s, f: +t[1] } : t === "open" ? { ...s, modal: true } : { ...s, modal: false };
export default function Demo({ p, priority = false }) {
    const [s, set] = useState({ nav: 0, sel: 0, modal: false, f: 0 });
    const [i, setI] = useState(0), [paused, setPaused] = useState(false), [vis, setVis] = useState(priority), [z, setZ] = useState(1), [fit, setFit] = useState(.6), [pos, setPos] = useState({ x: 30, y: 30 }), [ck, setCk] = useState(0);
    const root = useRef(), stage = useRef(), sc = useRef(.6);
    const script = p.k === "dash" ? DASH : SITE, run = vis && !paused;
    useEffect(() => {
        const red = matchMedia("(prefers-reduced-motion: reduce)").matches; if (red) setPaused(true);
        const io = new IntersectionObserver(([e]) => setVis(e.isIntersecting), { threshold: .3 }); io.observe(root.current);
        const ro = new ResizeObserver(([e]) => setFit(e.contentRect.width / W)); ro.observe(stage.current); return () => { io.disconnect(); ro.disconnect() }
    }, []);
    useEffect(() => { sc.current = fit * z }, [fit, z]);
    useEffect(() => {
        if (!run) return; const t = script[i % script.length];
        const el = stage.current.querySelector(`[data-t="${t}"]`);
        if (el) { const a = stage.current.getBoundingClientRect(), b = el.getBoundingClientRect(); setPos({ x: (b.left - a.left + b.width / 2) / sc.current, y: (b.top - a.top + b.height / 2) / sc.current }) }
        const a = setTimeout(() => { setCk(c => c + 1); set(x => apply(x, t)) }, 950), b = setTimeout(() => setI(n => n + 1), 1900);
        return () => { clearTimeout(a); clearTimeout(b) }
    }, [run, i]);
    const st = r => p.st[(r + (s.sel === r ? 1 : 0) + (s.modal && s.sel === r ? 1 : 0)) % 3];
    const bars = [...Array(9)].map((_, j) => 30 + ((j * 37 + s.nav * 23 + s.f * 41) % 65));
    const kv = j => Math.round(p.v[j] * (1 + (s.nav + s.f * 2) * .06)).toLocaleString("en-IN");
    const Rows = () => p.rows.map((r, j) => <div key={j} data-t={"row" + j} className={"m-row" + (s.sel === j ? " on" : "")}><b>{r[0]}</b><span>{r[1]}</span><em className={"c" + ((j + (s.sel === j ? 1 : 0)) % 3)}>{st(j)}</em></div>);
    return (<div ref={root} className="demo">
        <div className="bf"><i /><i /><i /><span>{p.u}</span></div>
        <div ref={stage} className="stage" style={{ "--a": p.a, height: H * fit }} role="img" aria-label={`Animated preview of the ${p.n} project`}>
            <div className="wrap" style={{ width: W / z, height: H / z, transform: `scale(${fit * z})` }}>
                {p.k === "dash" ? <div className="m-dash"><aside><b className="m-logo" />{p.nav.map((n, j) => <div key={n} data-t={"nav" + j} className={"m-nav" + (s.nav === j ? " on" : "")}>{n}</div>)}</aside>
                    <main><div className="m-top"><h4>{p.nav[s.nav]}</h4><div className="m-fs">{p.f.map((x, j) => <span key={x} data-t={"f" + j} className={s.f === j ? "on" : ""}>{x}</span>)}</div></div>
                        <div className="m-kpi">{p.kpi.map((k, j) => <div key={k}><small>{k}</small><b>{kv(j)}</b></div>)}</div>
                        <div className="m-bars">{bars.map((h, j) => <u key={j} style={{ height: "100%", transform: `scaleY(${h / 100})` }} />)}</div>
                        <Rows /><button data-t="open" className="m-btn">View details</button></main></div>
                    : <div className="m-site"><div className="m-tn"><b className="m-logo" />{p.nav.map((n, j) => <span key={n} data-t={"nav" + j} className={s.nav === j ? "on" : ""}>{n}</span>)}</div>
                        <div className="m-pg" style={{ transform: `translateY(${-s.nav * 30}px)` }}><div className="m-hero"><h3>{p.h}</h3><button data-t="open" className="m-btn">{p.cta}</button></div>
                            <div className="m-fs">{p.f.map((x, j) => <span key={x} data-t={"f" + j} className={s.f === j ? "on" : ""}>{x}</span>)}</div><Rows /><div className="m-row"><b>More…</b></div><div className="m-row"><b>Footer</b></div></div></div>}
                <div className={"m-modal" + (s.modal ? " on" : "")}><div><h5>{p.rows[s.sel][0]}</h5><p>{p.rows[s.sel][1]} · {st(s.sel)}</p><i /><i /><button className="m-btn" data-t="close">Close</button></div></div>
                <div className="cur" style={{ transform: `translate3d(${pos.x}px,${pos.y}px,0)` }}><svg width="22" height="22" viewBox="0 0 24 24"><path d="M5 3l14 8-6 2-3 6z" fill="#fff" stroke="#000" strokeWidth="1.5" /></svg><span key={ck} className="rp" /></div>
            </div></div>
        <div className="ctl" role="group" aria-label="Preview controls">
            <button onClick={() => setPaused(v => !v)} aria-label={paused ? "Play preview" : "Pause preview"}>{paused ? "▶ Play" : "❚❚ Pause"}</button>
            <button onClick={() => setZ(v => Math.max(.8, +(v - .1).toFixed(1)))} aria-label="Zoom out">−</button>
            <button onClick={() => setZ(v => Math.min(1.5, +(v + .1).toFixed(1)))} aria-label="Zoom in">+</button>
            <button onClick={() => setZ(1)} aria-label="Reset zoom to 100%">{Math.round(z * 100)}%</button></div></div>)
}
