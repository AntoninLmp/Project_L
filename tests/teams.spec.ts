import {expect, test} from "@playwright/test";

test ('add new team', async ({ page }) => {
    await page.goto('https://l.hr.dmerej.info/add_team');

    await page.fill('//*[@id="id_name"]', 'Team 1');
    await page.getByRole('button', { name: 'Add' }).click();

    await expect(page).toHaveURL('https://l.hr.dmerej.info/teams');
});