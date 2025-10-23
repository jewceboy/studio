
import PageHeader from '@/components/shared/PageHeader';
import ContactForm from '@/components/ui/ContactForm'; // Ensure this path is correct

export const metadata = {
  title: 'Contact Us | Malaga Travel Guide',
  description: 'Get in touch with Malaga Travel Guide. Send us your questions, feedback, or inquiries.',
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
