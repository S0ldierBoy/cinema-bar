import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';

export const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};

