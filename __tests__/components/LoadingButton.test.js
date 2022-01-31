import { render } from "../Utils/test-utils";
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
