import styles from './LoadingIndicator.module.css';

export default function LoadingIndicator() {
  return <div className={styles.loader} aria-label="loading" role="alert" />;
}
