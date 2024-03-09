import "./styles/global.css";

import Routes from "./routes";

const App = () => {
  return (
    <div className="container flex flex-col gap-10 mx-auto md:w-[40rem]">
      <Routes />
    </div>
  );
};

export default App;
