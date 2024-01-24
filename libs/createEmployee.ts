import type { Page } from "@playwright/test";

export const createEmployee = async (page: Page) => {
  await page.goto("https://l.hr.dmerej.info/add_employee");

  // Click the add new employee button

  await page.fill('//*[@id="id_name"]', "John Doe");
  await page.fill('//*[@id="id_email"]', "johndoe@gmail.com");
  await page.fill('//*[@id="id_address_line1"]', "12 rue du parc");
  await page.fill('//*[@id="id_city"]', "Paris");
  await page.fill('//*[@id="id_zip_code"]', "75001");
  await page.fill('//*[@id="id_hiring_date"]', "2021-06-01");
  await page.fill('//*[@id="id_job_title"]', "Software Engineer");

  await page.getByRole("button", { name: "Add" }).click();
};
