type ButtonProps = {
  text: string;
  title: string;
  variant: "primary" | "secondary";
};

const Button = ({ text, title, variant }: ButtonProps) => {
  return (
    <button
      title={title}
      className={`
        border-2 rounded-md px-4 py-1
        ${
          variant == "primary"
            ? "bg-[#6562fc] border-[#5046a1] text-white"
            : "bg-[#e2e2e2] border-gray-300 text-black"
        }
          `}
    >
      {text || "botão"}
    </button>
  );
};

export default Button;
