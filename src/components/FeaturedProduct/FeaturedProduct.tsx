import { Product } from "@/types/product";
import styles from "./FeaturedProduct.module.scss";
import Image from "next/image";

interface Props {
  product: Product;
}

const FeaturedProduct = ({ product }: Props) => {
  return (
    <section className={styles.featured}>
      <div className={styles.imageWrap}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={400}
          height={300}
        />
      </div>
      <div className={styles.info}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <span className={styles.price}>${product.price}</span>
      </div>
    </section>
  );
};

export default FeaturedProduct;
