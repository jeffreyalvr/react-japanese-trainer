const Box = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="rounded-lg w-full flex flex-col gap-6 p-10 border-4 border-[var(--border-box-light)] bg-[var(--bg-box-light)] dark:border-[var(--border-box-dark)] dark:bg-[var(--bg-box-dark)]">
      <div className="pb-4 border-b-2 border-dashed border-[var(--border-box-light)] dark:border-[var(--border-box-dark)]">
        <h1 className="text-3xl">{title}</h1>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default Box;
