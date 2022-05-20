import { useState } from "react";

type InputFieldProps = {
  onSubmit: (input: string) => void;
};

export const InputField = ({ onSubmit }: InputFieldProps) => {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (input) {
      onSubmit(input);
    }
    setInput("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Write your task here.."
        value={input}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </>
  );
};
