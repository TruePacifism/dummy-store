import styles from "./SkeletonLoader.module.scss";

const SkeletonLoader = () => {
  return (
    <div className={styles.skeletonGrid}>
      {Array.from({ length: 12 }).map((_, idx) => (
        <div key={idx} className={styles.skeletonCard} />
      ))}
    </div>
  );
};

export default SkeletonLoader;
