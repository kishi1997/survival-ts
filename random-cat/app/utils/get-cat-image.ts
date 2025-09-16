"use server";

import { CAT_API_KEY } from "@/env";

export const fetchCatImage = async (): Promise<string> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search", {
    // 仮のAPIキー
    headers: { "x-api-key": CAT_API_KEY },
  });
  const imgInfo = await res.json();
  return imgInfo[0].url;
};
