import styles from './Button.module.scss';

const Button = ({ text, type = 'default', onclick }) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[`button_${type}`]}`}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
