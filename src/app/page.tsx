"use client";
import axios from "@/lib/axios";
import ProductCard from "@/components/ProductCard/ProductCard";
import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";
import ProductModal from "@/components/ProductModal/ProductModal";
import { useUIStore } from "@/store/ui";
import { ProductResponse, Product } from "@/types/product";
import styles from "./HomePage.module.scss";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState<ProductResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const { productModal, openProductModal, closeProductModal } = useUIStore();

  useEffect(() => {
    setLoading(true);
    axios
      .get<ProductResponse>("/products?limit=12")
      .then((response) => {
        setProducts(response.data);
        setErrorMsg("");
      })
      .catch((error) => {
        let message = "Unknown error";
        if (error.response) {
          message = `Server error: ${error.response.status} ${error.response.statusText}`;
          if (error.response.data && typeof error.response.data === "object") {
            message += ` | Details: ${JSON.stringify(error.response.data)}`;
          }
        } else if (error.request) {
          message = "No response from server. Check your network connection.";
        } else if (error.message) {
          message = `Request error: ${error.message}`;
        }
        console.error("Error loading products:", message, error);
        setProducts(null);
        setErrorMsg(message);
      })
      .finally(() => setLoading(false));
  }, []);

  // Featured product: первый товар
  const featured = products?.products[0] as Product | undefined;
  const restProducts = products?.products.slice(1) || [];

  return (
    <main className={styles.main}>
      <h1>Our Products</h1>
      {loading && <SkeletonLoader />}
      {!loading && !products && (
        <div>
          {errorMsg && (
            <pre
              style={{
                color: "#b71c1c",
                background: "#fff0f0",
                padding: "0.7em",
                borderRadius: "8px",
                marginTop: "0.5em",
                fontSize: "0.97em",
                whiteSpace: "pre-wrap",
              }}
            >
              {errorMsg}
            </pre>
          )}
        </div>
      )}
      {!loading && products && featured && (
        <FeaturedProduct product={featured} />
      )}
      {!loading && products && (
        <div className={styles.grid}>
          {restProducts.map((product) => (
            <div
              key={product.id}
              className={styles.cardAnim}
              onClick={() => openProductModal(product)}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
      <ProductModal
        product={productModal.product}
        onClose={closeProductModal}
      />
    </main>
  );
}
