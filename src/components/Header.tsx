import styles from './styles/Header.module.css';

export default function Header({ children }: any) {
  return (
    <div className={ styles.mainContent }>
      <header className={ styles.topNav }>
        { children }
      </header>
    </div>
  );
}
