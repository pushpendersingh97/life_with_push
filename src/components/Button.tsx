const Button = ({
  buttonText,
  type = 'submit',
  disabled,
  onClick,
  className,
}: Readonly<{
  buttonText: string | undefined;
  type: 'submit' | 'reset' | 'button' | undefined;
  disabled?: boolean | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string | undefined;
}>) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`px-2 py-1 rounded-full text-white bg-blue-600 ${className}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
