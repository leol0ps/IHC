import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.goto('https://inf15979.disciplinas.rlaiola.inf.ufes.br/boca/index.php');
  await page.locator('input[name="name"]').fill('ihc2024');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('boca');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('cell', { name: 'Runs' }).click();
  await page.locator('select[name="problem"]').selectOption('10010');
  await page.locator('select[name="language"]').selectOption('11');
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').setInputFiles('solucao.txt');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Send' }).click();
  await page.getByRole('cell', { name: 'Not answered yet' }).nth(4).click();
  await page.getByRole('cell', { name: 'Not answered yet' }).nth(4).click();
  await page.getByRole('cell', { name: 'Not answered yet' }).nth(4).click();
  await page.getByRole('cell', { name: 'Not answered yet' }).nth(4).click();
  await page.getByRole('cell', { name: 'banking_10' }).click();
  await page.goto('https://inf15979.disciplinas.rlaiola.inf.ufes.br/boca/team/run.php');
});