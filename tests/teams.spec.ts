import { expect, test } from "@playwright/test";
import { resetDatabase } from "@libs/resetDatabase";

test("add new team", async ({ page }) => {
  await page.goto("https://l.hr.dmerej.info/add_team");

  function randomName() {
    return Math.random().toString(36).substring(7);
  }

  await page.fill('//*[@id="id_name"]', randomName());
  await page.getByRole("button", { name: "Add" }).click();

  await expect(page).toHaveURL("https://l.hr.dmerej.info/teams");
});

test("add existing team", async ({ page }) => {
  await resetDatabase(page);

  await page.goto("https://l.hr.dmerej.info/add_team");

  await page.fill('//*[@id="id_name"]', "Team 1");
  await page.getByRole("button", { name: "Add" }).click();

  await expect(page).toHaveURL("https://l.hr.dmerej.info/teams");

  await page.goto("https://l.hr.dmerej.info/add_team");

  await page.fill('//*[@id="id_name"]', "Team 1");
  await page.getByRole("button", { name: "Add" }).click();

  await expect(page).toHaveURL("https://l.hr.dmerej.info/add_team");

  //void resetDatabase(page);
});
