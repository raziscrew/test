import { test, expect } from '@playwright/test';

test('Products seartch input exist', async ({ page }) => {
  await page.goto('localhost:3000');

  // Target placeholder
   const ProductsSearch = 'Search for products';

   const logo = await page.getByPlaceholder(ProductsSearch);
   await expect(logo).toBeVisible();
});

test('Logo exists on the page', async ({ page }) => {
  await page.goto('localhost:3000');

  // Define the selector for the logo
   const logoSelector = 'store';

   // Check if the logo is visible on the page
   const logo = await page.getByAltText(logoSelector);
   await expect(logo).toBeVisible();3
});


test('Check few element exist on home page', async ({ page }) => {
  await page.goto('localhost:3000');

  // Get item by text
   const PhoneItemPixel = 'Google Pixel - Black';
   const PhoneItemSamsung = 'Samsung S7';
   const PhoneItemHTC = 'HTC 10 - Black';
   const PhoneItemHTCWhite = 'HTC 10 - White';
   const PhoneItemHTCDesire = 'HTC Desire 626s';
   const PhoneItemVintage = 'Vintage Iphone';
   const PhoneItemIphone = 'Iphone 7';
   const PhoneItemISmashed = 'Smashed Iphone';

   // Phone items
   const ExistPhonePixel = await page.getByText(PhoneItemPixel);
   const ExistPhoneSamsung = await page.getByText(PhoneItemSamsung);
   const ExistPhoneHTC = await page.getByText(PhoneItemHTC);
   const ExistPhoneHTCWhite = await page.getByText(PhoneItemHTCWhite);
   const ExistPhoneHTCDesire = await page.getByText(PhoneItemHTCDesire);
   const ExistPhoneVintage = await page.getByText(PhoneItemVintage);
   const ExistPhoneIphone = await page.getByText(PhoneItemIphone);
   const ExistPhoneSmashed = await page.getByText(PhoneItemISmashed);

   await expect(ExistPhonePixel).toBeVisible();
   await expect(ExistPhoneSamsung).toBeVisible();
   await expect(ExistPhoneHTC).toBeVisible();
   await expect(ExistPhoneHTCWhite).toBeVisible();
   await expect(ExistPhoneHTCDesire).toBeVisible();
   await expect(ExistPhoneVintage).toBeVisible();
   await expect(ExistPhoneIphone).toBeVisible();
   await expect(ExistPhoneSmashed).toBeVisible();
});

test('Product image exists on the page', async ({ page }) => {
  await page.goto('localhost:3000/details');

  // Define the selector for the product image
  const imageSelector = 'img[src="img/product-1.png"].img-fluid[alt="product"]';

  // Check if the product image exists on the page
  const image = await page.locator(imageSelector);
  await expect(image).toHaveCount(1);  // Ensure that exactly one matching element exists
});


test('Check if specific h1 text exists in the div', async ({ page }) => {
  await page.goto('localhost:3000/details');

  // Define the selector for the div containing the h1
  const divSelector = 'div.col-10.mx-auto.text-center.text-slanted.text-blue.my-5';
  const h1Selector = `${divSelector} > h1`;

  // Check if the h1 with the specific text exists within the div
  const h1 = await page.locator(h1Selector);
  await expect(h1).toHaveText('Google Pixel - Black');
});

test('Check if all text content in the div exists', async ({ page }) => {
  // Navigate to the webpage
  await page.goto('localhost:3000/details');

  // Define the selector for the div containing the text
  const divSelector = 'div.col-10.mx-auto.col-md-6.my-3.text-capitalize';

  // Check the model text
  const modelText = await page.locator(`${divSelector} > h2`);
  await expect(modelText).toHaveText('model:Google Pixel - Black');

  // Check the made by text
  const madeByText = await page.locator(`${divSelector} > h4.text-title.text-uppercase.text-muted.mt-3.mb-2`);
  await expect(madeByText).toHaveText('made by: google');

  // Check the price text
  const priceText = await page.locator(`${divSelector} > h4.text-blue`);
  await expect(priceText).toHaveText('Price : $10');

  // Check the info about product text
  const infoText = await page.locator(`${divSelector} > p.text-capitalize.font-weight-bold.mt-3.mb-0`);
  await expect(infoText).toHaveText('some info about product');

  // Check the detailed description text
  const descriptionText = await page.locator(`${divSelector} > p.text-muted.lead`);

  // mostly test text
  const descriptionExpected = 'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.';
  await expect(descriptionText).toHaveText(descriptionExpected);

  // Check the back to products button
  const backButton = await page.locator(`${divSelector} > div > a > button.sc-bdVaJa.cWXsaF`);
  await expect(backButton).toHaveText('back to products');

  // Check the add to cart button
  const addToCartButton = await page.locator(`${divSelector} > div > button.sc-bdVaJa.hsiYoy`);
  await expect(addToCartButton).toHaveText('add to cart');
});