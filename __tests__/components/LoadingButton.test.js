import { fireEvent, render, cleanup } from "../test-utils";
import { act } from "react-test-renderer";
import LoadingButton from "../../src/components/LoadingButton";

describe("Loading Button", () => {
  it("should render on the DOM", () => {
    const { getByTestId } = render(<LoadingButton />);
    const button = getByTestId("loadingButton");
    expect(button).toBeTruthy();
  });

  it("should say Load More", () => {
    const { getByTestId } = render(<LoadingButton />);
    const button = getByTestId("loadingButton");
    expect(button).toHaveTextContent("Load More");
  })
});
