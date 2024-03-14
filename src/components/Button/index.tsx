import { Link } from "react-router-dom";

type DefaultProps = {
  text?: string;
  title?: string;
};

type ButtonProps = DefaultProps & {
  variant: "primary" | "secondary";
};

type IconButtonProps = DefaultProps &
  ButtonProps & {
    icon: string;
    fillColor: string;
  };

type LinkButtonProps = DefaultProps & {
  route: string;
};

const defaultCss =
  "border-2 rounded-md px-4 py-1 h-[36px] cursor-pointer transition-colors";
const primaryCss =
  "bg-[#6562fc] border-transparent hover:bg-[#7472ff] text-white";
const secondaryCss =
  "bg-[#e2e2e2] border-gray-300 hover:bg-[#f4f4f4] text-black";

const Button = ({ text, title, variant }: ButtonProps) => {
  return (
    <button
      title={title || ""}
      className={`${defaultCss} ${
        variant == "primary" ? primaryCss : secondaryCss
      }`}
    >
      {text || "botão"}
    </button>
  );
};

const IconButton = ({ title, variant, icon, fillColor }: IconButtonProps) => {
  return (
    <button
      title={title || ""}
      className={`${defaultCss} ${
        variant == "primary" ? primaryCss : secondaryCss
      }`}
    >
      <svg src={icon} className={`size-full fill-[${fillColor}]`} />
    </button>
  );
};

const LinkButton = ({ text, title, route }: LinkButtonProps) => {
  return (
    <Link
      to={route}
      title={title || ""}
      className={`${defaultCss + primaryCss}`}
    >
      {text || "botão"}
    </Link>
  );
};

export { Button, IconButton, LinkButton };
