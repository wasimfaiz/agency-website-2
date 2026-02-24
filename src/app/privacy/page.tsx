import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PrivacyPage() {
  return (
    <div className="bg-[#FCFCFC] text-black font-sans min-h-screen flex flex-col selection:bg-black/20">
      <Navbar forceDarkAtTop={true} />

      <main className="flex-1 max-w-4xl mx-auto px-6 pt-32 pb-20 mt-10 w-full">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-sm font-mono text-black/40 uppercase tracking-widest mb-12">Last Updated: February 24, 2026</p>

        <div className="space-y-12 text-lg text-black/70 leading-relaxed font-light">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black font-heading tracking-normal">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you fill out a form, request support, or communicate with us. The types of personal information we may collect include your name, email address, phone number, and any other information you choose to provide.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black font-heading tracking-normal">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to operate our web platform, improve your user experience, send you technical notices and support messages, and communicate with you about products, services, offers, promotions, and events.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black font-heading tracking-normal">3. Information Sharing</h2>
            <p>
              We do not share your personal information with third parties except as described in this privacy policy or as necessary to provide our services and protect our rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black font-heading tracking-normal">4. Security</h2>
            <p>
              We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black font-heading tracking-normal">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@setztupd.com" className="border-b border-black text-black hover:opacity-60 transition-opacity">hello@setztupd.com</a>.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
