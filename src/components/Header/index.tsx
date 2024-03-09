import logo_img from "../../assets/icons/logo.png";

const Header = () => {
  return (
    <header className="w-full h-32 flex flex-row p-20 items-center justify-center gap-4 text-center">
      <img src={logo_img} alt="あ" />
      <h1 className="text-3xl">Japanese Trainer</h1>
    </header>
  );
};

export default Header;
