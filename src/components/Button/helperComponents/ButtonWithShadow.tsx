import { ButtonProps } from "../Button";
import "./helper.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ApprovalIcon from "@mui/icons-material/Approval";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import CameraIcon from "@mui/icons-material/Camera";

const ButtonWithShadow = ({
  variant = "default",
  size = "md",
  color = "default",
  disabledFlag = false,
  startIcon,
  endIcon,
}: ButtonProps) => {
  let buttonClassName = "";

  if (disabledFlag) {
    buttonClassName = `button ${variant}-disabled ${size} color-${color}`;
  } else {
    buttonClassName = `button ${variant} ${size} color-${color}`;
  }

  let startIconTag: React.ReactElement = <></>;

  switch (startIcon) {
    case "add_shopping_cart":
      startIconTag = <AddShoppingCartIcon className='icons' />;
      break;
    case "approval":
      startIconTag = <ApprovalIcon className='icons' />;
      break;
    case "attach_file":
      startIconTag = <AttachFileIcon className='icons' />;
      break;
    case "brightness":
      startIconTag = <Brightness4Icon className='icons' />;
      break;
    case "camera":
      startIconTag = <CameraIcon className='icons' />;
      break;
  }

  switch (endIcon) {
    case "add_shopping_cart":
      startIconTag = <AddShoppingCartIcon className='icons' />;
      break;
    case "approval":
      startIconTag = <ApprovalIcon className='icons' />;
      break;
    case "attach_file":
      startIconTag = <AttachFileIcon className='icons' />;
      break;
    case "brightness":
      startIconTag = <Brightness4Icon className='icons' />;
      break;
    case "camera":
      startIconTag = <CameraIcon className='icons' />;
      break;
  }

  if (startIcon !== undefined) {
    return (
      <button className={buttonClassName + " color-primary"}>
        {startIconTag}
        <span className='button-text-span'>Default</span>
      </button>
    );
  }

  if (endIcon !== undefined) {
    return (
      <button className={buttonClassName + " color-primary"}>
        <span className='button-text-span'>Default</span>
        {startIconTag}
      </button>
    );
  }

  return <button className={buttonClassName}>Default</button>;
};
export default ButtonWithShadow;
