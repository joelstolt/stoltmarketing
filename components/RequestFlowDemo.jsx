"use client";

import { useState } from "react";
import { MessageSquare, Smartphone, Check } from "lucide-react";

const steps = [
  { title: "Kunden skriver", icon: MessageSquare, text: "Hej! Jag vill byta elcentral i min villa. Kan ni hjälpa mig och vad behöver ni veta?", label: "Förfrågan via hemsidan" },
  { title: "Du får ett SMS", icon: Smartphone, text: "Ny förfrågan om elcentral. Öppna inkorgen för kontaktuppgifter och hela meddelandet.", label: "Avisering till din mobil" },
  { title: "Du granskar svaret", icon: Check, text: "Hej! Tack för din fråga. Skicka gärna en bild på elcentralen och adressen, så återkommer jag om nästa steg.", label: "AI-förslag som du kan ändra" },
];
export default function RequestFlowDemo() {
  const [step, setStep] = useState(0);
  const current = steps[step], Icon = current.icon;
  return <section className="max-w-6xl mx-auto px-6 py-12 sm:py-20" aria-labelledby="request-demo-title">
    <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-16 items-center">
      <div><p className="eyebrow">Från fråga till svar</p><h2 id="request-demo-title" className="text-[clamp(30px,4vw,48px)] leading-[1.12] mt-5 mb-5">Du får förfrågan.<br /><em className="text-primary">Du bestämmer svaret.</em></h2><p className="text-[17px] max-w-[44ch]">Rutan samlar det kunden skriver på hemsidan. Du får en avisering och ett utkast, så att du slipper börja från ett tomt mejl.</p><p className="text-[14px] text-muted mt-4">Illustrerat exempel med påhittade uppgifter. Inget meddelande skickas här. Rutan besvarar inte samtal till ditt vanliga nummer och bokar inte jobb i din kalender.</p></div>
      <div className="border border-border rounded-2xl bg-surface overflow-hidden">
        <ol className="grid grid-cols-3 border-b border-border">{steps.map((item, index) => <li key={item.title}><button type="button" onClick={() => setStep(index)} aria-pressed={index === step} className={`w-full h-full px-2 sm:px-4 py-4 text-[12px] sm:text-[14px] font-[family-name:var(--font-ui)] ${index === step ? "bg-primary text-[#191405]" : "text-body hover:bg-surface-muted"}`}><span className="block font-semibold mb-1">{index + 1}</span>{item.title}</button></li>)}</ol>
        <div aria-live="polite" className="p-6 sm:p-8 min-h-[270px]"><Icon size={25} aria-hidden="true" className="text-primary mb-4" /><p className="text-[13px] text-muted font-[family-name:var(--font-ui)] mb-3">{current.label}</p><p className="text-[20px] leading-relaxed text-heading">{current.text}</p>{step === 2 && <p className="text-[14px] text-primary mt-4">Förslaget går inte iväg förrän du väljer att skicka.</p>}</div>
      </div>
    </div>
  </section>;
}
