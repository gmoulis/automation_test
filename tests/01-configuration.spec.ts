import{test} from '@playwright/test'

//pour éviter les duplicate de commandes
test.beforeEach(async({page}) => {
  await page.goto('http://localhost:4200/')
})


test.describe.skip('suite1',() => {
  test.beforeEach(async({page}) => {
    await page.getByText('Forms').click()
  })

  test('the first test1', async ({page}) => {
    await page.getByText('Form Layouts').click()
  })

  test('navigate to datepicker page1', async ({page}) => {
    await page.getByText('Datepicker').click()
  })
})

test.describe.skip('suite2',() => {
  test.beforeEach(async({page}) => {
    await page.getByText('Charts').click()
  })

  test('the second test', async ({page}) => {
    await page.getByText('Echarts').click()
  })

})


//pour tous les tests. Pas utilisé souvent
/*test.beforeAll(async({page}) => {
  await page.goto('http://localhost:4200/')
  await page.getByText('Forms').click()
})*/

//page is fixture. here la page blanche du browser
/*test('the first test', async ({page}) => {
    await page.getByText('Form Layouts').click()
})

test('navigate to datepicker page', async ({page}) => {
  await page.getByText('Datepicker').click()
})*/

//peut être utilisé pour nettoyer les data
//test.afterEach(async({page}) => {})

//après tous les tests.
//test.afterAll(async({page}) => {})

