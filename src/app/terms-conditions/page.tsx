import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Terms & Conditions | Malaga Travel Guide',
  description: 'Read the terms and conditions for using the Malaga Travel Guide website.',
};

export default function TermsConditionsPage() {
  return (
    <div>
      <PageHeader
        title="Terms & Conditions"
        subtitle="Please read our terms and conditions carefully."
      />
      <Section>
        <div className="prose max-w-4xl mx-auto">
            <p>
                This is placeholder content for your Terms & Conditions page. It's important to have a comprehensive document outlining the rules and guidelines for your website users.
            </p>
            <h3>1. Introduction</h3>
            <p>
                These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Malaga Travel Guide accessible at your-domain.com.
            </p>
            <h3>2. Intellectual Property Rights</h3>
            <p>
                Other than the content you own, under these Terms, Malaga Travel Guide and/or its licensors own all the intellectual property rights and materials contained in this Website.
            </p>
            {/* Add more sections as needed: Restrictions, Your Content, No warranties, Limitation of liability, etc. */}
             <p className="mt-8 text-center text-sm text-muted-foreground">
                This is a template. You should consult with a legal professional to create a terms and conditions agreement that is suitable for your specific needs.
            </p>
        </div>
      </Section>
    </div>
  );
}