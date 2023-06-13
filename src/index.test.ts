import { jest } from "@jest/globals";
import { printSum } from "./index.js";

describe("index", () => {
  test("it should print 4", () => {
    const spy = jest.spyOn(console, "log");
    printSum(2, 2);
    expect(spy).toHaveBeenCalledWith("4");
  });
});
