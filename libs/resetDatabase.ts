import type { Page } from "@playwright/test";

export const resetDatabase = async (page: Page) => {
  await page.goto("https://l.hr.dmerej.info/reset_db");
  await page.click('button[type="submit"]');
};
