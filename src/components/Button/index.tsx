type ButtonProps = {
  text: string;
  title?: string;
  variant: "primary" | "secondary";
};

const Button = ({ text, title, variant }: ButtonProps) => {
  return (
    <button
      title={title || ""}
      className={`
        border-2 rounded-md px-4 py-1 cursor-pointer
        ${
          variant == "primary"
            ? "bg-[#6562fc] border-transparent hover:bg-[#7472ff] text-white"
            : "bg-[#e2e2e2] border-gray-300 hover:bg-[#f4f4f4] text-black"
        }
          `}
    >
      {text || "botão"}
    </button>
  );
};

export default Button;
