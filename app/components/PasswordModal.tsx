"use client";

import { useCallback, useState } from "react";
import { Button, Flex, Input, ModalWrapper, Text } from "../ui-components";
import { ENCRYPTED_PASSWORD } from "../constants";
import { useGetBreakpointValue } from "../hooks";
import sha256 from "js-sha256";

interface PasswordModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

export const PasswordModal = ({ onClose, onSuccess }: PasswordModalProps) => {
  const [password, setPassword] = useState("");
  const [isWrongPassword, setIsWrongPassword] = useState(false);
  const { getBreakpointValue } = useGetBreakpointValue();

  const handleSubmit = useCallback(() => {
    if (sha256(password) === ENCRYPTED_PASSWORD) {
      onSuccess();
    } else {
      setIsWrongPassword(true);
    }
  }, [password, onSuccess]);

  return (
    <ModalWrapper
      onClose={onClose}
      modalProps={{
        style: { width: getBreakpointValue([340, 600, 600, 600]) },
        wrapperClassname: "!flex-col items-stretch",
      }}
    >
      <Flex direction="col" className="gap-6" justifyContent="between">
        <Flex direction="col" className="gap-3 tablet:gap-6">
          <Text variant="h4">
            This case study is <i className="font-instrument">protected.</i>
          </Text>
          <Flex direction="col" className="gap-2">
            <Input
              type="password"
              placeholder="Enter a password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isWrongPassword && (
              <Text>The password you have entered is incorrect.</Text>
            )}
          </Flex>
        </Flex>
        <Flex
          direction="col"
          justifyContent="between"
          className="tablet:flex-row gap-2 tablet:gap-0"
        >
          <div className="hidden tablet:block">
            <Button onClick={onClose}>Cancel</Button>
          </div>
          <Button
            hasIcon
            onClick={handleSubmit}
            style={getBreakpointValue([
              { width: "100%" },
              undefined,
              undefined,
              undefined,
            ])}
            wrapperClassname="!flex-col tablet:!flex-row items-stretch"
            className="justify-center"
          >
            Enter
          </Button>
          <div className="w-full tablet:hidden">
            <Button
              onClick={onClose}
              className="justify-center"
              style={{ width: "100%" }}
              wrapperClassname="!flex-col items-stretch"
            >
              Cancel
            </Button>
          </div>
        </Flex>
      </Flex>
    </ModalWrapper>
  );
};
