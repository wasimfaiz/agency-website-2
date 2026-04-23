import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PrivacyPage() {
  return (
    <div className="bg-[#F4F6F8] text-[#0A2540] font-sans min-h-screen flex flex-col selection:bg-[#007BFF]/20 selection:text-[#0A2540]">
      <Navbar forceDarkAtTop={true} />

      <main className="flex-1 max-w-4xl mx-auto px-6 pt-32 pb-20 mt-10 w-full">
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-sm font-bold text-[#007BFF] uppercase tracking-widest mb-12">Last Updated: February 24, 2026</p>

        <div className="space-y-12 text-lg text-[#0A2540]/80 leading-relaxed font-medium">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0A2540] font-heading tracking-normal">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you fill out a form, request support, or communicate with us. The types of personal information we may collect include your name, email address, phone number, and any other information you choose to provide.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0A2540] font-heading tracking-normal">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to operate our web platform, improve your user experience, send you technical notices and support messages, and communicate with you about products, services, offers, promotions, and events.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0A2540] font-heading tracking-normal">3. Information Sharing</h2>
            <p>
              We do not share your personal information with third parties except as described in this privacy policy or as necessary to provide our services and protect our rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0A2540] font-heading tracking-normal">4. Security</h2>
            <p>
              We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0A2540] font-heading tracking-normal">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:wasim@setzet.com" className="border-b border-[#0A2540] text-[#007BFF] hover:opacity-60 transition-opacity">wasim@setzet.com</a>.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
