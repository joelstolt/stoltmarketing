"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui";
import JoelCard from "@/components/JoelCard";
import InquiryForm from "@/components/InquiryForm";
import { SITE } from "@/lib/local/data";

const contactMethods = [
  {
    icon: Mail,
    title: "E-post",
    value: "joel@stoltmarketing.se",
    href: "mailto:joel@stoltmarketing.se",
    desc: "Svar samma arbetsdag",
  },
  {
    icon: Phone,
    title: "Telefon",
    value: SITE.phone,
    href: SITE.phoneHref,
    desc: "Ring eller SMS, vardagar 08:00 till 17:00",
  },
  {
    icon: MapPin,
    title: "Plats",
    value: "Hässleholm, Sverige",
    href: null,
    desc: "Jobbar med kunder i hela Sverige",
  },
];

export default function KontaktContent() {
  return <>
    <PageHero compact cta={false} breadcrumbs={[{label:"Start",href:"/"},{label:"Kontakt"}]} badge="Kontakt" title="Skriv till Joel" subtitle="Berätta vad du behöver hjälp med. Jag svarar personligen, normalt samma arbetsdag. På kvällar och helger återkommer jag nästa arbetsdag." />
    <section className="px-5 sm:px-8 py-10 sm:py-16"><div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_340px] gap-12 lg:gap-20 items-start">
      <div className="bg-surface border border-border rounded-xl p-5 sm:p-8"><h2 className="text-[28px] mb-3">Vad funderar du på?</h2><p className="mb-6">Du behöver inte veta vilken tjänst du ska välja. Vill du prata direkt kan du <a href="/boka" className="text-primary underline">boka en tid i kalendern</a>.</p><InquiryForm /></div>
      <aside><JoelCard compact /><h2 className="text-[24px] mt-8 mb-5">Du når mig också här</h2><ul className="space-y-5">{contactMethods.map((method) => <li key={method.title} className="flex gap-3"><method.icon size={20} className="text-primary mt-1 shrink-0" aria-hidden="true" /><div><p className="text-heading">{method.href ? <a href={method.href} className="underline underline-offset-4">{method.value}</a> : method.value}</p><p className="text-[14px] text-muted">{method.desc}</p></div></li>)}</ul><p className="text-[15px] mt-8">En första kontakt kostar inget. Jag berättar vad jag kan hjälpa till med och vad det kostar innan du bestämmer dig.</p></aside>
    </div></section>
  </>;
}
