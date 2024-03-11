import logo_img from "../../assets/icons/logo.png";

const Header = () => {
  return (
    <header className="w-full h-32 flex flex-col p-20 items-center justify-center gap-2 text-center sm:flex-row sm:gap-4">
      <img src={logo_img} alt="あ" className="size-12 sm:size-max" />
      <h1 className="text-2xl sm:text-3xl">Japanese Trainer</h1>
    </header>
  );
};

export default Header;
