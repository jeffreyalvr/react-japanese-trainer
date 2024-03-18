import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Alphabet from "../../components/Alphabets";
import Modal from "../../components/Modal";

import { useLearningModalContext } from "../../Contexts/LearningModalContext";

const Home = () => {
  const { learningModalActive } = useLearningModalContext();

  return (
    <>
      <Modal isOpen={learningModalActive} />
      <div className="container flex flex-col gap-2 mx-auto md:w-[40rem]">
        <Header />
        <Alphabet />
        <Footer />
      </div>
    </>
  );
};

export default Home;
