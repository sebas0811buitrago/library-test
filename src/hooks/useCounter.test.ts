import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "./useCounter";

test("should use counter", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
