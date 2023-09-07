type TCopyrightProps = {
  copyrightMessage: string;
};

export const Copyright = ({ copyrightMessage }: TCopyrightProps) => <p>© {copyrightMessage}</p>;
