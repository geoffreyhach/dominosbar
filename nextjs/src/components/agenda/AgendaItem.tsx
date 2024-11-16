import { Event } from "@/types/types";
import SubTitle from "../SubTitle";
import dateFormatter from "@/utils/dateFormatter";
import FacebookBtn from "../social/FacebookBtn";
import ReactMarkdown from "react-markdown";

interface IAgendaItemProps {
  data: Event;
}

export default function AgendaItem({ data }: IAgendaItemProps): JSX.Element {
  const hasFacebookUrl = data.FacebookUrl;

  return (
    <div
      className={
        "container relative flex flex-col gap-1 items-center md:items-start"
      }
    >
      {hasFacebookUrl && (
        <div className="absolute top-3 right-0">
          <FacebookBtn />
        </div>
      )}
      <SubTitle title={data.title} />
      <div className="text-sm text-center md:text-left font-bold font-sans">
        {dateFormatter(data.date)}
      </div>
      <div className="text-sm font-sans text-center md:text-left">
        <ReactMarkdown>{data.body}</ReactMarkdown>
      </div>
      <ul className="list-none">
        {data.Artiste?.map((artist) => (
          <li className="group" key={artist.ArtistName}>
            <a
              className="inline-flex items-center font-medium group-hover:underline"
              href={artist.Url}
              target="_blank"
            >
              {artist.ArtistName}
              <svg
                className="w-4 h-4 ms-2 rtl:rotate-180 transition-transform duration-300 group-hover:scale-125"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
