import { test, expect } from "@playwright/test";
import { createEmployee } from "../libs/createEmployee";
import { resetDatabase } from "../libs/resetDatabase.ts";

test("add new employee", async ({ page }) => {
  await createEmployee(page);
  await expect(page).toHaveURL("https://l.hr.dmerej.info/employees");
  await resetDatabase(page);
});

test("zip code employee should be positive", async ({ page }) => {
  // TODO: use createEmployee lib function and add params to it
  await page.goto("https://l.hr.dmerej.info/add_employee");

  await page.fill('//*[@id="id_name"]', "Tom Scott");
  await page.fill('//*[@id="id_email"]', "tomscott@gmail.com");
  await page.fill('//*[@id="id_address_line1"]', "12 rue du parc");
  await page.fill('//*[@id="id_city"]', "Paris");
  await page.fill('//*[@id="id_zip_code"]', "-1");
  await page.fill('//*[@id="id_hiring_date"]', "2021-06-01");
  await page.fill('//*[@id="id_job_title"]', "Software Engineer");

  await page.getByRole("button", { name: "Add" }).click();

  await page.goto("https://l.hr.dmerej.info/employees");
  await expect(page.getByText("Tom Scott")).not.toBeVisible();
  await resetDatabase(page);
});
