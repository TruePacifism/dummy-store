"use client";

import { Product } from "@/types/product";
import { useAuthStore } from "@/store/auth";
import styles from "./ProductCard.module.scss";
import { useState, useEffect, useRef } from "react";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setImgLoaded(true);
    }
  }, []);

  return (
    <div className={styles.card}>
      {!imgLoaded ? (
        <>
          <div style={{ position: "relative", width: "100%" }}>
            <div
              className={styles.skeletonThumbnail}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            />
            <img
              ref={imgRef}
              src={product.thumbnail}
              alt={product.title}
              style={imgLoaded ? {} : { visibility: "hidden" }}
              onLoad={() => setImgLoaded(true)}
            />
          </div>
          <div className={styles.skeletonTitle} />
          <div className={styles.skeletonCategory} />
          <div className={styles.skeletonPrice} />
          {isAuthenticated && <div className={styles.skeletonButton} />}
        </>
      ) : (
        <>
          <div style={{ position: "relative", width: "100%" }}>
            <img
              ref={imgRef}
              src={product.thumbnail}
              alt={product.title}
              style={imgLoaded ? {} : { visibility: "hidden" }}
              onLoad={() => setImgLoaded(true)}
            />
          </div>
          <h3>{product.title}</h3>
          <p className={styles.category}>{product.category}</p>
          <p className={styles.price}>${product.price}</p>
          {isAuthenticated && <button>Add to cart</button>}
        </>
      )}
    </div>
  );
}
