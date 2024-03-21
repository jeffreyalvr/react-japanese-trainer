const SubTitle = ({ text }: { text: string }) => {
  return (
    <h1 className="text-2xl text-[var(--primary-opaque)] text-center">
      {text}
    </h1>
  );
};

export default SubTitle;
