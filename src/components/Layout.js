import Footer from "./Footer";
import Header from "./Header";

const data = {
  copyRight: `© ${new Date().getFullYear()}. carlosvargs.Made With Love by.`,
  dev: "Carlos Vargas",
};

export default function Layout({ children }) {
  return (
    <>
      <Header data={data} />
      {children}
      <Footer data={data} />
    </>
  );
}
