import Header from "../../components/Header";
import Box from "../../components/Box";
import { LinkButton } from "../../components/Button";
import Footer from "../../components/Footer";

const NotFound = () => {
  return (
    <>
      <Header />
      <Box title="Página não encontrada">
        <span className="text-[var(--fg-light)] dark:text-[var(--fg-dark)]">
          A página procurada não está em nosso sitema.
        </span>
        <LinkButton text="Voltar ao início" route="/" />
      </Box>
      <Footer />
    </>
  );
};

export default NotFound;
