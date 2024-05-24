import { test, expect } from '@playwright/test';

test('Check prices', async ({ page }) => {
    await page.goto('localhost:3000');
  
     const PricePhonePixel = await page.getByRole('heading', { name: '$10' });
     const PriceExistPhoneSamsung =await page.getByRole('heading', { name: '$16' });
     const PriceExistPhoneHTC =await page.getByRole('heading', { name: '$8' });
     const PriceExistPhoneHTCWhite = await page.getByRole('heading', { name: '$18' });
     const PriceExistPhoneHTCDesire = await page.getByRole('heading', { name: '$24' });
     const PriceExistPhoneVintage = await page.getByRole('heading', { name: '$17' });
     const PriceExistPhoneIphone = await page.getByRole('heading', { name: '$30' });
     const PriceExistPhoneSmashed =await page.getByRole('heading', { name: '$2', exact: true });
  
  
     await expect(PricePhonePixel).toBeVisible();
     await expect(PriceExistPhoneSamsung).toBeVisible();
     await expect(PriceExistPhoneHTC).toBeVisible();
     await expect(PriceExistPhoneHTCWhite).toBeVisible();
     await expect(PriceExistPhoneHTCDesire).toBeVisible();
     await expect(PriceExistPhoneVintage).toBeVisible();
     await expect(PriceExistPhoneIphone).toBeVisible();
     await expect(PriceExistPhoneSmashed).toBeVisible();
  });
  
  test('Product image exists on the page', async ({ page }) => {
    await page.goto('localhost:3000/details');
  
    // Define the selector for the product image
    const imageSelector = 'img[src="img/product-1.png"].img-fluid[alt="product"]';
  
    // Check if the product image exists on the page
    const image = await page.locator(imageSelector);
    await expect(image).toHaveCount(1);  // Ensure that exactly one matching element exists
  });
  
  test('Logo exists on Details the page', async ({ page }) => {
    await page.goto('localhost:3000/details');
  
     const logoSelector = 'store';
  
     const logo = await page.getByAltText(logoSelector);
     await expect(logo).toBeVisible();
  });
  
  test('Button add to cart exist', async ({ page }) => {
    await page.goto('localhost:3000/details');
  
     const Target = 'add to cart';
  
     const logo = await page.getByRole('button', { name: Target });
     await expect(logo).toBeVisible();
  });
  
  test('button Products exists and redirects to target link', async ({ page }) => {
    // Navigate to the initial page
    await page.goto('http://localhost:3000/details');
  
    // Locate the link using a more specific selector
    const locator = await page.locator('li.nav-item.ml-5 a.nav-link:has-text("Products")');
  
    // Verify the link 
    await expect(locator).toBeTruthy();
  
    // Click the link and handle the new page or tab
    const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      locator.click()
    ]);
  
    // Wait for the new page to load
    await newPage.waitForLoadState();
    expect(newPage.url()).toBe('http://localhost:3000/');
  });
  
  test('Button add to cart exist', async ({ page }) => {
    await page.goto('localhost:3000/cart');
  
     const Target = 'Your cart is currently empty';
  
     const title = await page.getByText(Target);
     await expect(title).toBeTruthy();
  });
  
  test('link redirects to the home page', async ({ page }) => {
    await page.goto('localhost:3000/cart'); 
  
    await Promise.all([
      // Click the link by button text
      page.click('text=back to shopping') 
    ]);
  
    // Check if the current URL is the home page
    await expect(page).toHaveURL('http://localhost:3000/'); // Replace with your home page URL
  });
