type ClassNameProps = {
  className: string,
};

export function Loading({ className }: ClassNameProps) {
  return (
    <h2 className={ className }>Carregando...</h2>
  );
}
