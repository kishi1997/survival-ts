import { connection } from "next/server";
import CatImage from "./components/CatImage";
import { fetchCatImage } from "./utils/get-cat-image";

export default async function Home() {
  await connection();
  const imgUrl = await fetchCatImage();
  return (
    <div className="font-sans">
      <CatImage initialUrl={imgUrl} />
    </div>
  );
}
