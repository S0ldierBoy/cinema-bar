import Header from '../components/Header.tsx';

export const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  );
};

