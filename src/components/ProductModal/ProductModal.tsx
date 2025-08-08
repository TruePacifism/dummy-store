import { Product } from "@/types/product";
import styles from "./ProductModal.module.scss";
import Image from "next/image";

interface Props {
  product: Product | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: Props) => {
  if (!product) return null;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>
        <Image
          className={styles.image}
          src={product.images[0]}
          alt={product.title}
          width={400}
          height={300}
          placeholder="blur"
          blurDataURL={product.thumbnail}
        />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <span className={styles.price}>${product.price}</span>
      </div>
    </div>
  );
};

export default ProductModal;
