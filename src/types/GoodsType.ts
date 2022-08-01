export type GoodsType = {
  ttl: string;
  date: {
    year: number;
    month: number;
    day: number;
  };
  style: string;
  descriptiion: string;
  edition: {
    img: string;
    ttl: string;
    price: string;
    contents: string;
    url: string;
  }[];
};

export default GoodsType;
