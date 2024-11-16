"use client";

import Agenda from "@/components/agenda/Agenda";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { addDays } from "date-fns";
import useSWR from "swr";

export default function Archive() {
  const { data, error, isLoading } = useSWR(
    "agendas?populate[0]=Artiste&sort[0]=date:asc&filters[date][$lte]=" +
      addDays(new Date(), 1).toISOString().split("T")[0]
  );

  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container flex flex-col gap-4 md:flex-row">
      <div className="flex-1">
        <Agenda data={data.data} title="Archives" />
      </div>
    </div>
  );
}
