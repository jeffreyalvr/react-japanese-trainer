import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Alphabet from "../../components/Alphabets";
import Modal from "../../components/Modal";

const Home = () => {
  return (
    <>
      <Modal isOpen={true} />
      <div className="container flex flex-col gap-2 mx-auto md:w-[40rem]">
        <Header />
        <Alphabet />
        <Footer />
      </div>
    </>
  );
};

export default Home;
