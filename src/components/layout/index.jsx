import Header from "../header/header";

const Layout = ({ children }) => {
  return (
    <main className="dark:bg-[#030712]">
      <Header />
      {children}
    </main>
  );
};
export default Layout;
