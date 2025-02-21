import React from "react";
import { FormControl, FormField, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";
import { Control, FieldPath } from "react-hook-form";
import "./styles/auth-style.scss";

// Define the formSchema type without assigning a value
type FormSchema = z.infer<ReturnType<typeof authFormSchema>>;

interface CustomInputProps {
  control: Control<FormSchema>;
  name: FieldPath<FormSchema>;
  placeholder: string;
}

const CustomInput = ({ control, name, placeholder }: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div>
          <FormControl>
            <div className="input">
              <Input
                placeholder={placeholder}
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </div>
          </FormControl>
          <FormMessage />
        </div>
      )}
    />
  );
};

export default CustomInput;
