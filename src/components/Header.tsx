import './styles/Header.css';

export default function Header({ children }: any) {
  return (
    <div className="main-content">
      <header className="topNav">
        { children }
      </header>
    </div>
  );
}
