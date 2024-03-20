import Header from "../../components/Header";
import Box from "../../components/Box";
import { LinkButton } from "../../components/Button";
import Footer from "../../components/Footer";

const NotFound = () => {
  return (
    <div className="container flex flex-col gap-2 mx-auto md:w-[40rem]">
      <Header />
      <Box title="Página não encontrada">
        <span className="text-[var(--fg-light)] dark:text-[var(--fg-dark)]">
          A página procurada não está em nosso sitema.
        </span>
        <LinkButton text="Voltar ao início" route="/" />
      </Box>
      <Footer />
    </div>
  );
};

export default NotFound;
