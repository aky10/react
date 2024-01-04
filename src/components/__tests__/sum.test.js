import { sum } from "../sum";

test("sum", () => {
  const res = sum(3, 4);

  //assertion
  expect(res).toBe(7);
});
