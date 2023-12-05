type ButtonProps = {
  children: string;
  onClick?: (event: any) => void;
  disabled: boolean;
  className: string;
  type: 'button' | 'submit' | 'reset' | undefined;
};

export default function Button(
  { children, onClick, disabled, className, type }: ButtonProps,
) {
  return (
    <div>
      <button
        onClick={ onClick }
        disabled={ disabled }
        className={ className }
        type={ type }
      >
        { children }

      </button>
    </div>
  );
}
