import { expect, test } from "@playwright/test";
import type { Employee } from "type/Employee";
import { testURL } from "@libs/constants";
import { createEmployee } from "@libs/createEmployee";
import { resetDatabase } from "@libs/resetDatabase";

test("add new employee", async ({ page }) => {
  const employee: Employee = {
    name: "Tom Scott",
    email: "tomscott@gmail.com",
    address_line1: "12 rue du parc",
    address_line2: "",
    city: "Paris",
    zip_code: "75001",
    hiring_date: "2021-06-01",
    job_title: "Software Engineer",
  };
  await createEmployee(page, employee);
  await expect(page).toHaveURL(`${testURL}/employees`);
  await resetDatabase(page);
});

test("zip code employee should be positive", async ({ page }) => {
  const employee: Employee = {
    name: "Tom Scott",
    email: "tomscott@gmail.com",
    address_line1: "12 rue du parc",
    address_line2: "",
    city: "Paris",
    zip_code: "-1",
    hiring_date: "2021-06-01",
    job_title: "Software Engineer",
  };
  await createEmployee(page, employee);
  await page.goto(`${testURL}/employees`);
  await expect(page.getByText("Tom Scott")).not.toBeVisible();
  await resetDatabase(page);
});

test("edit hiring date", async ({ page }) => {
  await resetDatabase(page);
  const employee: Employee = {
    name: "Tom Scott",
    email: "tomscott@gmail.com",
    address_line1: "12 rue du parc",
    address_line2: "",
    city: "Paris",
    zip_code: "-1",
    hiring_date: "2021-06-01",
    job_title: "Software Engineer",
  };
  await createEmployee(page, employee);
  await page.goto(`${testURL}/employees`);

  const href: string = await page.$eval("a.btn-primary", (el) => el.getAttribute("href") || "");
  await page.goto(`${testURL}${href}`);
  await page.goto(`${testURL}${href}/contract`);

  await page.fill('//*[@id="id_hiring_date"]', "2021-06-02");

  await expect(page).toHaveURL(`${testURL}${href}`);
});
