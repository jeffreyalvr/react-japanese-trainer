import { Link } from "react-router-dom";

type DefaultProps = {
  text?: string;
  title?: string;
};

type ButtonProps = DefaultProps & {
  variant: "primary" | "secondary";
};

type ActionButtonProps = DefaultProps &
  ButtonProps & {
    action: React.MouseEventHandler<HTMLButtonElement>;
  };

type IconButtonProps = DefaultProps &
  ButtonProps & {
    icon: string;
  };

type LinkButtonProps = DefaultProps & {
  route: string;
};

const defaultCss =
  "border-2 rounded-md px-4 py-1 h-[36px] cursor-pointer transition-colors select-none";
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

const ActionButton = ({ text, title, variant, action }: ActionButtonProps) => {
  return (
    <button
      title={title || ""}
      className={`${defaultCss} ${
        variant == "primary" ? primaryCss : secondaryCss
      }`}
      onClick={action}
    >
      {text || "botão"}
    </button>
  );
};

const IconButton = ({ title, variant, icon }: IconButtonProps) => {
  return (
    <button
      title={title || ""}
      className={`${defaultCss} ${
        variant == "primary" ? primaryCss : secondaryCss
      }`}
    >
      <img src={icon} className={`size-full`} />
    </button>
  );
};

const LinkButton = ({ text, title, route }: LinkButtonProps) => {
  return (
    <Link
      to={route}
      title={title || ""}
      className={`${defaultCss} ${primaryCss}`}
    >
      {text || "botão"}
    </Link>
  );
};

export { Button, ActionButton, IconButton, LinkButton };
