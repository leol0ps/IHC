import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('heading', { name: 'todos' }).click();
  await page.getByText('Double-click to edit a todo').click();
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('csdcsd');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
});
