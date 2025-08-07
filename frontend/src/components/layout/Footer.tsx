export const Footer = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-text-muted md:text-left">
          Built by{" "}
          <a
            href="https://github.com/wlifr"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            William Frank
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/wlifr/portfolio"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};