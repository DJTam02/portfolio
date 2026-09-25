import { createContext } from "react";
import { ROUTES } from "../constants";

export type PasswordProtectionContextType = {
  requestedRoute: ROUTES | null;
  isPasswordValid: boolean;
  setRequestedRoute: (requestedRoute: ROUTES) => void;
  setIsPasswordValid: (isPasswordValid: boolean) => void;
};

export const PasswordProtectionContext =
  createContext<PasswordProtectionContextType>({
    requestedRoute: null,
    isPasswordValid: false,
    setRequestedRoute: () => {},
    setIsPasswordValid: () => {},
  });
