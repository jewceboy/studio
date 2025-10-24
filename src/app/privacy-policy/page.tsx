
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Privacy Policy | Malaga Travel Guide',
  description: 'Read the privacy policy for the Malaga Travel Guide website to understand how we handle your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        subtitle="Your privacy is important to us."
      />
      <Section>
        <div className="prose max-w-4xl mx-auto">
            <p>
                This is placeholder content for your Privacy Policy page. It is crucial to inform your users about how you collect, use, and protect their personal information.
            </p>
            <h3>1. Information We Collect</h3>
            <p>
                We may collect personal information that you voluntarily provide to us, such as your name and email address when you subscribe to our newsletter. We may also collect non-personal information, such as browser type and operating system, to improve our website.
            </p>
            <h3>2. How We Use Your Information</h3>
            <p>
                We use the information we collect to send you newsletters, respond to inquiries, and improve our website and services. We will not sell or share your personal information with third parties without your consent, except as required by law.
            </p>
            {/* Add more sections as needed: Cookies, Security, Third-Party Links, Children's Privacy, etc. */}
            <p className="mt-8 text-center text-sm text-muted-foreground">
                This is a template. You should consult with a legal professional to create a privacy policy that complies with regulations like GDPR, CCPA, etc., and is suitable for your specific data practices.
            </p>
        </div>
      </Section>
    </div>
  );
}
