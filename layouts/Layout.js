import PageHeader from '@/components/PageHeader';
import PageFooter from '@/components/PageFooter';

const Layout = ({ children }) => {
  return (
    <div>
      <PageHeader />
      <main className="max-width-container main">{children}</main>
      <PageFooter />
    </div>
  );
};

export default Layout;
