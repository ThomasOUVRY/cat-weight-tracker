import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import WeightDialog from "./WeightDialog";

vi.mock(import("next/navigation"), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useParams: vi.fn().mockReturnValue({ catId: "1" }),
    useRouter: vi.fn(),
  };
});

describe("WeightDialog", () => {
  it("should display empty form when open with no weight", () => {
    render(<WeightDialog open={true} setOpen={() => {}} />);

    expect(screen.getByRole("textbox", { name: "weight" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Date" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Ajouter un poids" })).toBeInTheDocument();
  });

  it("should display form with weight when open with weight", () => {
    render(
      <WeightDialog
        open={true}
        setOpen={() => {}}
        weight={{
          record_id: "1",
          cat_id: "1",
          weight_kg: 10,
          measurement_date: new Date("2021-01-01"),
          created_at: new Date("2021-01-01"),
          notes: "test",
        }}
      />
    );

    expect(screen.getByRole("dialog")).toBeVisible();
    expect(screen.getByRole("textbox", { name: "Weight" })).toHaveValue(10);
    expect(screen.getByRole("textbox", { name: "Date" })).toHaveValue("2021-01-01");
  });
});
