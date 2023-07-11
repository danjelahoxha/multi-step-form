import { render, fireEvent, act } from "@testing-library/react";
import { useForm, FormProvider } from "react-hook-form";
import Toggle from "./Toggle";

describe("Toggle component", () => {
  it("changes its value when clicked", async () => {
    const options = {
      on: { label: "On", value: "on" },
      off: { label: "Off", value: "off" },
    };

    const Wrapper: React.FC = () => {
      const methods = useForm();

      return (
        <FormProvider {...methods}>
          <Toggle control={methods.control} name="toggle" options={options} />
        </FormProvider>
      );
    };
    // Arrange: The checkbox should be checked after clicking
    const { getByLabelText } = render(<Wrapper />);

    // Simulate clicking on the toggle
    const checkbox = getByLabelText("toggle") as HTMLInputElement;
    await act(async () => {
      fireEvent.click(checkbox);
    });

    expect(checkbox.checked).toBe(true);

    // Act: Simulate clicking on the toggle again
    await act(async () => {
      fireEvent.click(checkbox);
    });

    // Assert:The checkbox should be unchecked after clicking again
    expect(checkbox.checked).toBe(false);
  });
});
