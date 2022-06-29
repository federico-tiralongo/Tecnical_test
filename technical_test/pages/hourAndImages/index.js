import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const HourAndImage = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const [stopImage, setStopImage] = useState(false);

  const images = [
    {
      id: 1,
      src: "https://i.picsum.photos/id/91/200/200.jpg?hmac=y-8iGl9dOkbHqADPlWuS-rWBHNBWWXlzKcsTDu2WeQo",
    },
    {
      id: 2,
      src: "https://i.picsum.photos/id/628/536/354.jpg?hmac=W_-CeOM1wK13bBoAisLYOEJaIZwd9r2wM5VpQBb7uKA",
    },
    {
      id: 3,
      src: "https://i.picsum.photos/id/1055/536/354.jpg?hmac=Hn5PGfnC-Vl2rw83fls2cbf4Erp2tKUF1vJFW9xkU5w",
    },
  ];

  useEffect(() => {
    if (!stopImage) {
      if (currentImage === 1 || currentImage === 2) {
        setTimeout(() => {
          setCurrentImage(currentImage + 1);
        }, 300);
      } else if (currentImage === 3) {
        setTimeout(() => {
          setCurrentImage(1);
        }, 300);
      }
    }
  }, [currentImage, stopImage]);

  function handleStopImage() {
    setStopImage(!stopImage);
  }
  return (
    <div className={styles.hourAndImage}>
      <h1>Timer</h1>
      <h1>Images</h1>
      <div className={styles.image}>
        {images.map((image) => {
          return (
            <>
              {currentImage === image.id && (
                <div
                  key={image.id}
                  className={styles.image}
                  onClick={handleStopImage}
                >
                  <img src={image.src} />
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default HourAndImage;
