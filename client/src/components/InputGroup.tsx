import React from "react";
import clsx from "clsx";
import { css } from "@emotion/css";

interface InputGroupProps {
  className?: string;
  type?: string;
  placeholder?: string;
  value: string;
  error: string | undefined;
  setValue: (str: string) => void;
}

const inputGroupStyles = css`
  min-width: 300px;
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
  background-color: #edf2f7;
  transition: background-color 0.2s, border-color 0.2s;
  &:focus {
    background-color: #fff;
    border-color: #718096;
    outline: none;
  }
  &:hover {
    background-color: #fff;
    border-color: #cbd5e0;
  }
  &.border-red-500 {
    border-color: #e53e3e;
  }
`;

const InputGroup: React.FC<InputGroupProps> = ({
  className = "mb-2",
  type = "text",
  placeholder = "",
  error,
  value,
  setValue,
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        className={clsx("w-full", inputGroupStyles)}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {error && (
        <small className="block font-medium text-red-500">{error}</small>
      )}
    </div>
  );
};

export default InputGroup;
