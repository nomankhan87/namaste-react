import { render, screen } from "@testing-library/react";
import RestrauntCard from "../RestrauntCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
 
it("should render RestaurantCard component with props Data", () => {
  render(<RestrauntCard resData={MOCK_DATA} />);

  const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");

  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
  // Home Work - test HOC : withPromtedLabel()
});