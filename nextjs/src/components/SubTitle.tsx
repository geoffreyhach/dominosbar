interface ISubTitleProps {
  title: string;
}

export default function SubTitle({ title }: ISubTitleProps): JSX.Element {
  return (
    <div className="text-2xl font-bold font-sans text-center sm:text-left">
      {title}
    </div>
  );
}
