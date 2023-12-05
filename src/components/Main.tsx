import './styles/Main.css';

type MainProps = {
  children: any;
};

export default function Main({ children }: MainProps) {
  return (
    <div>
      <main className="container-main">
        { children }
      </main>
    </div>
  );
}
