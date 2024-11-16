export type News = {
  title: string;
  body: string;
};

export type Event = {
  title: string;
  date: string;
  body: string;
  FacebookUrl?: string;
  Artiste?: Artist[];
};

export type Artist = {
  ArtistName: string;
  Url: string;
};
