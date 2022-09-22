import ButtonWithoutShadow from "./helperComponents/ButtonWithoutShadow";
import ButtonWithShadow from "./helperComponents/ButtonWithShadow";

export type ButtonProps = Partial<{
  variant: "default" | "outline" | "text";
  disabled: boolean;
  disableShadow: boolean;
  color: "default" | "primary" | "secondary" | "danger";
  size: "sm" | "md" | "lg";
  disabledFlag: boolean;
  startIcon:
    | "camera"
    | "brightness"
    | "attach_file"
    | "approval"
    | "add_shopping_cart";
  endIcon:
    | "camera"
    | "brightness"
    | "attach_file"
    | "approval"
    | "add_shopping_cart";
}>;

const Buttons = ({
  variant = "default",
  size = "md",
  color = "default",
  disabled = false,
  disableShadow = false,
  startIcon,
  endIcon,
}: ButtonProps) => {
  if (disableShadow === false) {
    return (
      <ButtonWithShadow
        variant={variant}
        size={size}
        color={color}
        disabledFlag={disabled}
        startIcon={startIcon}
        endIcon={endIcon}
      />
    );
  } else {
    if (color === "default") {
      return (
        <ButtonWithoutShadow
          variant={variant}
          size={size}
          color='primary'
          disabledFlag={disabled}
          startIcon={startIcon}
          endIcon={endIcon}
        />
      );
    } else {
      return (
        <ButtonWithoutShadow
          variant={variant}
          size={size}
          color={color}
          disabledFlag={disabled}
          startIcon={startIcon}
          endIcon={endIcon}
        />
      );
    }
  }
};
export default Buttons;
