import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <div style={{ padding: '60px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>Hemsida Malmö</h1>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
            Professionell webbutveckling för företag i Malmö. Modern design, snabb laddning och SEO-optimerad från start.
          </p>
          <a href="/boka" style={{ display: 'inline-block', marginTop: '30px', padding: '12px 24px', backgroundColor: '#6366f1', color: 'white', borderRadius: '8px', textDecoration: 'none' }}>
            Boka konsultation
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
