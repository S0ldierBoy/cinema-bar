import Header from './Header.tsx';
import Footer from './Footer.tsx';

export const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};
