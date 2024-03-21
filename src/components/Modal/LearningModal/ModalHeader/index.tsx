const ModalHeader = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-2 py-4 sm:flex-row sm:justify-between sm:px-10">
      <div className="flex flex-row gap-4">
        <span className="text-[var(--primary)] dark:text-[var(--fg-dark)]">
          1
        </span>
        <div className="border border-dashed border-[var(--border-box-light)] dark:border-[var(--border-box-dark)]"></div>
        <span className="text-[var(--primary-opaque)]">56</span>
      </div>
      <div className="flex flex-row gap-4">
        <span className="text-[var(--primary-opaque)]">0 lembrados</span>
        <div className="border border-dashed border-[var(--border-box-light)] dark:border-[var(--border-box-dark)]"></div>
        <span className="text-[var(--primary-opaque)]">0 esquecidos</span>
      </div>
    </div>
  );
};

export default ModalHeader;
