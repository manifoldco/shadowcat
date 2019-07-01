import { newE2EPage } from "@stencil/core/testing";

describe("my-component", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<manifold-oauth></manifold-oauth>");
    const element = await page.find("manifold-oauth");
    expect(element).toHaveClass("hydrated");
  });
});
