import styles from './Button.module.scss';

const Button = ({ text, type = 'default', className, onclick }) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[`button_${type}`]} ${className ?? ''}`}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
