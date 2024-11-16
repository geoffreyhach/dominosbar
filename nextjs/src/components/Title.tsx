interface ITitleProps {
  title: string;
}

export default function Title({ title }: ITitleProps): JSX.Element {
  return <div className="text-4xl font-bold font-sans">{title}</div>;
}
