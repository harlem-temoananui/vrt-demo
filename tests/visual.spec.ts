import { test, expect } from '@playwright/test';

test('homepage looks right', async ({ page }) => {
  await page.setContent(`
    <h1>Hello VRT</h1>
    <button style="padding:12px 24px;background:blue;color:white;border:0;border-radius:6px">
      Buy now
    </button>
  `);
  await expect(page).toHaveScreenshot();
});

//npx playwright test visual.spec.ts --project=chromium