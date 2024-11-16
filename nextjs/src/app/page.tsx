"use client";

import Agenda from "@/components/agenda/Agenda";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import NewsItem from "@/components/NewsItem";
import { addDays, subDays } from "date-fns";
import useSWR from "swr";

export default function Home() {
  const { data, error, isLoading } = useSWR("articles");
  const {
    data: news,
    error: newsError,
    isLoading: newsIsLoading,
  } = useSWR(
    "agendas?populate[0]=Artiste&sort[0]=date:desc&filters[date][$gte]=" +
      subDays(new Date(), 1).toISOString().split("T")[0]
  );

  if (error || newsError) {
    return <Error />;
  }

  if (isLoading || newsIsLoading) {
    return <Loading />;
  }

  return (
    <div className="container flex flex-col gap-8 md:flex-row">
      <div className="flex-1">
        <NewsItem title={data.data[0].title} body={data.data[0].body} />
      </div>
      <div className="flex-1">
        <Agenda data={news.data} title="Prochains évenements" />
      </div>
    </div>
  );
}
