"use client";

import Agenda from "@/components/agenda/Agenda";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import Title from "@/components/Title";
import { Block } from "@/types/types";
import useSWR from "swr";
import ReactMarkdown from "react-markdown";

export default function Archive() {
  const { data, error, isLoading } = useSWR("about?populate=*");

  console.log(data);

  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container flex flex-col gap-4 md:flex-row">
      <Title title={data.data.title} />
      <div className="flex-1">
        {data.data.blocks.map((block: Block) => (
          <div key={block.id}>
            <ReactMarkdown>{block.body}</ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  );
}