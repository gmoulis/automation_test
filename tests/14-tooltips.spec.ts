import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
  await page.goto('http://localhost:4200')
})

test ('tooltips', async ({page}) => {
  await page.getByText('Modal & Overlays').click()
  await page.getByText('Tooltip').click()

  const tooltipCard = page.locator('nb-card', {hasText: "Tooltip Placements"})
  await tooltipCard.getByRole('button', { name: 'Top' }).hover()

  page.getByRole('tooltip') //if you have a role tooltip created
  const tooltip = await page.locator('nb-tooltip').textContent()
  expect (tooltip).toEqual('This is a tooltip')
})

//F8 pour capturer le DOM du tooltip
