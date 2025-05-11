const Button = ({
  buttonText,
  buttonType,
  disabled,
}: Readonly<{
  buttonText: string | undefined;
  buttonType: "submit" | "reset" | "button" | undefined;
  disabled: boolean | undefined;
}>) => {
  return (
    <button type={buttonType} disabled={disabled}>
      {buttonText}
    </button>
  );
};

export default Button;
