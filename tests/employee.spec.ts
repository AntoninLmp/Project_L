import { test, expect } from "@playwright/test";
import { createEmployee } from "../libs/createEmployee";
import { resetDatabase } from "../libs/resetDatabase.ts";

test("add new employee", async ({ page }) => {
  await createEmployee(page);
  await expect(page).toHaveURL("https://l.hr.dmerej.info/employees");
  await resetDatabase(page);
});
