import{test} from '@playwright/test'

test.beforeEach(async({page}) => {
  await page.goto('http://localhost:4200/')
  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()
})


test('User facing locators', async({page}) => {
  //role élément avec lequel nous voulons interagir (67 éléments)
  await page.getByRole('textbox', {name:"Email"}).first().click()
  await page.getByRole('button', {name:"Sign in"}).first().click()

  //label
  await page.getByLabel('Email').first().click()

  //placeholder
  await page.getByPlaceholder('Jane Doe').click()

  //text
  await page.getByText('Using the Grid').click()

  //testId
  await page.getByTestId('SignIn').click()

  //title
  await page.getByTitle('IoT Dashboard').click()
})

//test
