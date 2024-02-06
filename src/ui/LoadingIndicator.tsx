import styles from './LoadingIndicator.module.css';

export default function LoadingIndicator() {
  return (
    <div className="absolute inset-0 grid bg-slate-200/20 backdrop-blur-sm place-content-center">
      <div className={styles.loader} aria-label="loading" role="alert" />
    </div>
  );
}
