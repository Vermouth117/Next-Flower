import { render, screen } from "@testing-library/react";
import AboutPage from "../app/page/about/page";

test("必要な項目が表示されている", () => {
  render(<AboutPage />);

  expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("About");

  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(7);

  const isRequiredItemsDisplayed = (itemName: string): boolean => {
    return listItems.some((listItem) => {
      const link = listItem.querySelector("a");
      return link && link.textContent === itemName;
    });
  };

  const requiredItems = ["Home", "About", "Contact", "Order", "Online Shop"];

  requiredItems.forEach((itemName) => {
    expect(isRequiredItemsDisplayed(itemName)).toBe(true);
  });
});

test("正しいリンク先が紐付けられている", () => {
  render(<AboutPage />);

  expect(screen.getByRole("link", { name: "Vermouth" })).toHaveAttribute(
    "href",
    "/"
  );

  expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
    "href",
    "/"
  );

  expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
    "href",
    "/page/about"
  );

  expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
    "href",
    "/page/contact"
  );

  expect(screen.getByRole("link", { name: "Order" })).toHaveAttribute(
    "href",
    "/page/order"
  );

  expect(screen.getByRole("link", { name: "Online Shop" })).toHaveAttribute(
    "href",
    "/page/online-shop"
  );
});
