import { Event } from "@/types/types";
import Title from "../Title";
import AgendaItem from "./AgendaItem";

interface IAgendaProps {
  data: Event[];
  title: string;
}

export default function Agenda({ data, title }: IAgendaProps): JSX.Element {
  return (
    <div className="container flex flex-col items-center gap-4 border-2 border-white p-2 md:items-start">
      <Title title={title} />
      {data.map((event: Event) => (
        <AgendaItem key={event.title} data={event} />
      ))}
    </div>
  );
}
