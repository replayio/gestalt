// @flow strict
import { test, expect } from '@playwright/test';

const BREAKPOINTS = { xs: 360, sm: 576, md: 768, lg: 1313 };

Object.keys(BREAKPOINTS).forEach((size) => {
  test(`PageHeader visual regression check ${size} - primary action - subtext`, async ({
    page,
  }) => {
    await page.setViewportSize({
      width: BREAKPOINTS[size],
      height: 1080,
    });

    await page.goto('/visual-test/PageHeader-subtext-primaryAction');

    if (['xs', 'sm'].includes(size)) {
      await page.locator('button[aria-controls="pageheader-dropdown"]').click();
    }

    const locator = page.locator('[data-test-id="visual-test"]');
    await expect(locator).toHaveScreenshot(
      `PageHeader-subtext-primaryAction-${size}.png`
    );
  });
});
