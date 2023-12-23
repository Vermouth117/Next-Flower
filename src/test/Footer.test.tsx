import { render, screen } from "@testing-library/react";
import Footer from "../app/components/organisms/Footer";

test("必要な項目が表示されている", () => {
  render(<Footer />);

  expect(
    screen.getByText("© Vermouth. All Rights Reserved.")
  ).toBeInTheDocument();
});
