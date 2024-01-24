import { test, expect } from "@playwright/test";
import { createEmployee } from "../libs/createEmployee";

test("add new employee", async ({ page }) => {
  await createEmployee(page);
  await expect(page).toHaveURL("https://l.hr.dmerej.info/employees");
});
