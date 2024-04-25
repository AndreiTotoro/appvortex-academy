import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICategory } from "@/lib/database/models/category.model";

type DropdownProps = {
  value?: string;
  onChangeHandler?: (value: string) => void;
};

export default function Dropdown({ value, onChangeHandler }: DropdownProps) {
  const [categories, setCategories] = useState<ICategory[]>([]);

  return (
    <Select
      onValueChange={onChangeHandler}
      defaultValue={value}
    >
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.length > 0 &&
          categories.map((category) => (
            <SelectItem
              className="select-item p-regular-14"
              key={category._id}
              value={category._id}
            >
              {category.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
}
