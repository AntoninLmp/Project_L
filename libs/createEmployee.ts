import type { Page } from "@playwright/test";

export const createEmployee = async (page: Page, employee: Employee) => {
  await page.goto("https://l.hr.dmerej.info/add_employee");

  // Click the add new employee button

  await page.fill('//*[@id="id_name"]', employee.name);
  await page.fill('//*[@id="id_email"]', employee.email);
  await page.fill('//*[@id="id_address_line1"]', employee.address_line1);
  await page.fill('//*[@id="id_city"]', employee.city);
  await page.fill('//*[@id="id_zip_code"]', employee.zip_code);
  await page.fill('//*[@id="id_hiring_date"]', employee.hiring_date);
  await page.fill('//*[@id="id_job_title"]', employee.job_title);

  await page.getByRole("button", { name: "Add" }).click();
};
