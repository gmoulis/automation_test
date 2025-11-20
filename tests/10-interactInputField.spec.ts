import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
  await page.goto('http://localhost:4200')
})

test.describe('Form Layouts page', () =>{
  test.beforeEach(async({page}) => {
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
  })

  test('input fields', async ({page}) => {
    const usingTheGridEmailInput = page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name:"Email"})

    await usingTheGridEmailInput.fill('test@test.com')
    await usingTheGridEmailInput.clear()
    //Plus lent, car il doit simuler un délai entre les frappes (le délai par défaut est de 10 ms).
    await usingTheGridEmailInput.pressSequentially('test2@test.com', {delay: 500})

    //generic assertion
    const inputValue = await usingTheGridEmailInput.inputValue()
    expect(inputValue).toEqual('test2@test.com')

    //locator assertion (input
    await expect(usingTheGridEmailInput).toHaveValue('test2@test.com')

  })
})
