const Footer = () => {
  return (
    <footer className="w-full flex flex-col mt-8 gap-2 items-center justify-center py-10 border-t-2 border-dashed border-t-[var(--border-box-light)] dark:border-t-[var(--border-box-dark)]">
      <span className="flex flex-row gap-2 text-[var(--fg-light)] dark:text-[var(--fg-dark)]">
        Feito por{" "}
        <a
          href="https://jeffreyalvr.dev"
          target="_blank"
          rel="noopener noreferrer"
          title="Clique para abrir o meu GitHub"
          className="text-[var(--primary-light)] hover:underline"
        >
          @jeffreyalvr.
        </a>
      </span>
    </footer>
  );
};

export default Footer;
