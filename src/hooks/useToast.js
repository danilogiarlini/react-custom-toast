import { useContext } from "react";
import { ToastContext } from "../store/ToastContext"

export const useToast = () => useContext(ToastContext)