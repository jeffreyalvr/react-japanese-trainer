const ModalContent = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full">
      <div className="flex flex-col size-max items-center justify-center rounded-md sm:size-max p-4 bg-[var(--border-box-light)] dark:bg-[var(--border-box-dark)]">
        <h1 className="text-8xl text-[var(--primary)]">す</h1>
      </div>
      <div className="flex flex-row gap-4 h-max items-center">
        <span className="text-4xl h-full text-[var(--fg-dark)] dark:text-white">
          su
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="visibility"
          color="#fff"
          fill="none"
          height="48px"
          stroke="#fff"
          stroke-linecap="square"
          stroke-linejoin="miter"
          stroke-width="1"
          viewBox="0 0 24 24"
          className="size-full cursor-pointer stroke-[--primary-opaque] hover:stroke-white transition-colors"
        >
          <title id="visibility" />
          <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>
    </div>
  );
};

export default ModalContent;
