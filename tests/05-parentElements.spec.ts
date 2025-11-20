import{test} from '@playwright/test'

test.beforeEach(async({page}) => {
  await page.goto('http://localhost:4200/')
  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()
})

test('locating parents elements', async({page}) => {
  // il faut trouver le parent avant l'enfant (nb-card est le parent de nb-card-header)

  //first approach
  await page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"}).click()

  //second approach
  await page.locator('nb-card', {has: page.locator('#inputEmail')}).getByRole('textbox', {name: "Email"}).click()

  //third approach. filter même capacité que les deuxièmes arguments
  await page.locator('nb-card').filter({hasText: "Basic form"}).getByRole('textbox', {name: "Email"}).click()
  await page.locator('nb-card').filter({has: page.locator('.status-danger')}).getByRole('textbox', {name: "Password"}).click()

  await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText: "Sign in"}).click()

  await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox', {name: "Email"}).click()
})

//hasText option directement dans la création du localisateur
//filter plus explicite
