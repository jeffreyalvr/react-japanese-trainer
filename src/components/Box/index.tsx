import { Title } from "../Text";

type paddingType = {
  paddingX: number;
  paddingY: number;
};

const Box = ({
  gap,
  padding,
  children,
}: {
  gap?: number;
  padding?: paddingType;
  children: React.ReactNode;
}) => {
  const styles = {
    padding: {
      padding: `${padding?.paddingY || 0}rem ${padding?.paddingX || 0}rem`,
    },
    gap: {
      gap: `${gap || 0}rem`,
    },
  };
  return (
    <div
      className="rounded-lg w-full flex flex-col border-4 border-[var(--border-box-light)] bg-[var(--bg-box-light)] dark:border-[var(--border-box-dark)] dark:bg-[var(--bg-box-dark)] sm:w-[640px]"
      style={{ ...styles.padding, ...styles.gap }}
    >
      {children}
    </div>
  );
};

const BoxOverride = ({
  title,
  gap,
  padding,
  children,
}: {
  title: string;
  gap?: number;
  padding?: paddingType;
  children: React.ReactNode;
}) => {
  return (
    <Box gap={gap} padding={padding}>
      <div className="pb-4 border-b-2 border-dashed border-[var(--border-box-light)] dark:border-[var(--border-box-dark)]">
        <Title text={title} />
      </div>
      <div className="flex flex-col gap-4 items-center text-center">
        {children}
      </div>
    </Box>
  );
};

export { Box, BoxOverride };
