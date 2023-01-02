import PageHeader from '@/components/PageHeader';

const Layout = ({ children }) => {
  return (
    <div>
      <PageHeader />
      <main className="max-width-container main">{children}</main>
    </div>
  );
};

export default Layout;
