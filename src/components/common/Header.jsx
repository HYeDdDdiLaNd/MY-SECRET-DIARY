import styles from './Header.module.scss';

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <header>
      <div className={styles.left}>{leftChild}</div>
      <p className={styles.tit}>{title}</p>
      <div className={styles.right}>{rightChild}</div>
    </header>
  );
};

export default Header;
