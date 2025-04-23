import React from "react";

type InputProps = {
  name: string;
  value?: string;
  type?: string;
  onChange?: (e: any) => void;
  onKeyDown?: (e: any) => void;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
};

function Input({
  name,
  value,
  type = "text",
  onChange,
  onKeyDown,
  className,
  placeholder,
  disabled = false,
}: InputProps) {
  return (
    <input
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      disabled={disabled}
      className={`flex-1 placeholder-gray-300 bg-transparent px-3 py-1 border-2 border-gray-300 rounded-full ${className}`}
      name={name}
      type={type}
      placeholder={`Enter ${name}`}
    />
  );
}

export default Input;
