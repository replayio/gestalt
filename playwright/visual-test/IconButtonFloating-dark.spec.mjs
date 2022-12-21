// @flow strict
import { test, expect } from '@playwright/test';

test('IconButtonFloating dark mode visual regression check', async ({
  page,
}) => {
  await page.goto('/visual-test/IconButtonFloating-dark');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('IconButtonFloating-dark.png');
});
