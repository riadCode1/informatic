"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";



export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Search for a product...",
    "Which item do you need?",
    "Looking for something specific?",
    "What hardware do you need?",
    "Need a new keyboard or mouse?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
  
      
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    
  );
}
