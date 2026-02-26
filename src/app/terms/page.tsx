import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TermsPage() {
  return (
    <div className="bg-[#FCFCFC] text-black font-sans min-h-screen flex flex-col selection:bg-black/20">
      <Navbar forceDarkAtTop={true} />

      <main className="flex-1 max-w-4xl mx-auto px-6 pt-32 pb-20 mt-10 w-full">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 tracking-tight">Terms & Conditions</h1>
        <p className="text-sm font-mono text-black/40 uppercase tracking-widest mb-12">Last Updated: February 24, 2026</p>

        <div className="space-y-12 text-lg text-black/70 leading-relaxed font-light">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black font-heading tracking-normal">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black font-heading tracking-normal">2. Intellectual Property</h2>
            <p>
              The site and its original content, features, and functionality are owned by Setzet and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black font-heading tracking-normal">3. User Conduct</h2>
            <p>
              You agree to use our website only for lawful purposes. You are forbidden from utilizing the site to transmit any unlawful, threatening, libelous, defamatory, obscene, scandalous, inflammatory, or profane material that could constitute or encourage conduct considered a criminal offense.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black font-heading tracking-normal">4. Limitation of Liability</h2>
            <p>
              In no event shall Setzet, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for damages, direct or consequential, resulting from your use of the site, and you agree to defend, indemnify and hold us harmless from any claims, losses, liability costs and expenses.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black font-heading tracking-normal">5. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
