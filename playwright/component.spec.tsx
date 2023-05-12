import { test, expect } from "@playwright/experimental-ct-react"
import App from "../src/App"

test("example test", async ({ mount }) => {
    const component = await mount(<App/>);
    await expect(component).toContainText("Learn React");
});