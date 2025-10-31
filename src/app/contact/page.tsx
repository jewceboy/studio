
import PageHeader from '@/components/shared/PageHeader';
import ContactForm from '@/components/ui/ContactForm'; // Ensure this path is correct
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Contact Us | Malaga Travel Guide',
  description: 'Get in touch with the Malaga Travel Guide team. Send us your questions, feedback, or inquiries about traveling to Costa del Sol.',
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you! Whether you have a question, feedback, or a collaboration idea, please reach out."
      />
      <Section className="py-8">
        <ContactForm />
      </Section>
    </div>
  );
}
