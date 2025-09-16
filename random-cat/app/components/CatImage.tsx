"use client";
import React, { useState } from "react";
import { fetchCatImage } from "../utils/get-cat-image";
import styles from "../page.module.css";
type CatImageProps = {
  initialUrl: string;
};

const CatImage = ({ initialUrl }: CatImageProps) => {
  const [url, setUrl] = useState<string>(initialUrl);
  const handleClick = async () => {
    setUrl("");
    const newImage = await fetchCatImage();
    setUrl(newImage);
  };
  return (
    // <div className="flex flex-col gap-4 justify-center items-center py-8">
    //   <div className="h-[200px] w-[320px] overflow-hidden">
    //     {url && <img className="h-auto w-full" src={url}></img>}
    //   </div>
    //   <button
    //     className="p-2 bg-amber-50 text-amber-500 inline-block"
    //     onClick={handleClick}
    //   >
    //     Change image
    //   </button>
    // </div>
    <div className={styles.page}>
      <button onClick={handleClick} className={styles.button}>
        他のにゃんこも見る
      </button>
      <div className={styles.frame}>
        {url && <img src={url} className={styles.img} />}
      </div>
    </div>
  );
};

export default CatImage;
