import { toast } from "react-toastify";

export function txtSlicer(txt, max = 150) {
  if (txt.length >= max) return `${txt.slice(0, max)}...`;
  return txt;
}

export const CustomSuccessAlert = (message) => {
  toast.success(message, {
    position: "top-left",
    autoClose: true,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const CustomWarningAlert = (message) => {
  toast.warning(message, {
    position: "top-left",
    autoClose: true,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
