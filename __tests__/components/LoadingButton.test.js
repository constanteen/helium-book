import { fireEvent, render } from "@testing-library/react";
import { act } from "react-test-renderer";
import LoadingButton from "./LoadingButton";

describe("Loading Button", () => {
  it("should render on the DOM", () => {
    const { getByTestId } = render(<LoadingButton />);
    const button = getByTestId("loadingButton");
    expect(button).toBeTruthy();
  });

  it("should load when clicked", async() => {
    act(async() => {
      const { getByTestId } = render(<LoadingButton />);
      const button = getByTestId("loadingButton");
      fireEvent.click(button);
      expect(button).innerHTML("Loading...");
    })
  })
})
