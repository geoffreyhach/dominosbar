import ReactMarkdown from "react-markdown";
import Title from "./Title";

interface INewsItemProps {
  title: string;
  body: string;
}

export default function NewsItem({ title, body }: INewsItemProps): JSX.Element {
  return (
    <div className="border-2 border-white p-2 flex flex-col justify-center gap-2 items-center md:items-start">
      <Title title={title} />
      <div className="text-center md:text-left">
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </div>
  );
}
