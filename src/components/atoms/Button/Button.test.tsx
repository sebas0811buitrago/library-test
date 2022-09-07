import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("<Button />", () => {
  test("rendered text", () => {
    render(<Button label="hola" />);
    expect(screen.getByText("hola")).toBeDefined();
  });
});
