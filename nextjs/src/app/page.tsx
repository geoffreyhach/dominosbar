"use client";

import useSWR from "swr";

export default function Home() {
  const { data, error, isLoading } = useSWR("articles");
  console.log("data", data);
  console.log("error", error);

  if (error) {
    return <p>Failed to fetch</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {data.data.map((datum: any, index: number) => (
        <div key={index}>
          <li className="text-2xl font-bold font-sans">{datum.title}</li>
          <li>{datum.body}</li>
        </div>
      ))}
    </ul>
  );
  return (
    <div className="bg-black text-white">
      <h1 className="font-sans font-bold">Modernist</h1>
    </div>
  );
}
