import { sum } from "./package.js";

export const print = (message: string) => console.log(message);

export const printSum = (a: number, b: number) => {
  const result = sum(a, b);
  print(result.toString());
};

console.log("Hello");
