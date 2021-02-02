import Header from 'components/organisms/Header/Header';

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
