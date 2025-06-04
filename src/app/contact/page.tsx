
import PageHeader from '@/components/shared/PageHeader';
import ContactForm from '@/components/ui/ContactForm'; // Ensure this path is correct

export const metadata = {
  title: 'Contact Us | MalagaTravelGuide',
  description: 'Get in touch with MalagaTravelGuide. Send us your questions, feedback, or inquiries.',
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you! Whether you have a question, feedback, or a collaboration idea, please reach out."
      />
      <section className="py-8">
        <ContactForm />
      </section>
    </div>
  );
}
