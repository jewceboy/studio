import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Admin | Malaga Travel Guide',
  description: 'Manage website content.',
};

export default function AdminPage() {
  return (
    <div>
      <PageHeader
        title="Admin Panel"
        subtitle="Content Management System"
      />
      <Section>
        <p className="text-center text-lg">
            The FireCMS configuration has been created. The next step is to build the UI for the admin panel here.
        </p>
      </Section>
    </div>
  );
}
