import { describe, expect, test, vi } from "vitest";
import { printSum } from "./index.js";

describe("index", () => {
  test("it should print 4", () => {
    const spy = vi.spyOn(console, "log");
    printSum(2, 2);
    expect(spy).toHaveBeenCalledWith("4");
  });
});
