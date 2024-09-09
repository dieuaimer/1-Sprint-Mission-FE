import Button from './Button';
import styles from './WriteButton.module.css';

export default function WriteButton() {
  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.header}>게시글</h4>
        <Button name="글쓰기" />
      </div>
    </>
  );
}