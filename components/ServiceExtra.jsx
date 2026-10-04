import { SectionHeader } from "@/components/ui";

/** Fördjupning utan en andra FAQ eller ett andra schema. */
export default function ServiceExtra({ data }) {
  if (!data) return null;
  return (
    <section className="pb-14 sm:pb-20 px-5 sm:px-8">
      <div className="max-w-[760px] mx-auto">
        <SectionHeader badge="Att ta ställning till" title={data.deepHeading} />
        {data.deepParagraphs.map((paragraph) => <p key={paragraph} className="mt-6 text-[17px] leading-[1.8] text-body">{paragraph}</p>)}
      </div>
    </section>
  );
}
