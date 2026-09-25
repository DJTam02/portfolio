"use client";

import { useMemo, useState } from "react";
import { PasswordProtectionContext } from "./PasswordProtectionContext";
import { PasswordModal } from "../components/PasswordModal";
import { ROUTES } from "../constants";
import { useRouter } from "next/navigation";

export const PasswordProtectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [requestedRoute, setRequestedRoute] = useState<ROUTES | null>(null);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const router = useRouter();
  const passwordProtectionContext = useMemo(
    () => ({
      requestedRoute,
      isPasswordValid,
      setRequestedRoute,
      setIsPasswordValid,
    }),
    [requestedRoute, isPasswordValid],
  );

  return (
    <PasswordProtectionContext.Provider value={passwordProtectionContext}>
      {passwordProtectionContext.requestedRoute && (
        <PasswordModal
          onClose={() => passwordProtectionContext.setRequestedRoute(null)}
          onSuccess={() => {
            passwordProtectionContext.setRequestedRoute(null);
            router.push(passwordProtectionContext.requestedRoute!);
          }}
        />
      )}
      {children}
    </PasswordProtectionContext.Provider>
  );
};
