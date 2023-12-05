import styles from './styles/Main.module.css';

type MainProps = {
  children: any;
};

export default function Main({ children }: MainProps) {
  return (
    <div>
      <main className={ styles.containerMain }>
        { children }
      </main>
    </div>
  );
}
