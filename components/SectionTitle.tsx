interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h1 className="text-5xl font-bold pb-10">{title}</h1>;
};

export default SectionTitle;
