import { test, expect } from '@playwright/test';
import { URLS } from '../../playwright.config';

let page;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext({
        storageState: 'tests/admin/.auth/user.json'
    });
    page = await context.newPage();
});

test.afterAll(async () => {
    page.close();
});

test('Users page', async () => {
    await page.goto(URLS.admin + 'chat/users');
    await expect(page.getByRole('heading', { name: 'Kasutajad' })).toBeVisible();
});

test('Chatbot settings page open', async () => {
    await page.goto(URLS.admin + 'chat/chatbot/settings');
    await expect(page.getByRole('heading', { name: 'Seaded' })).toBeVisible();
});

test('Chatbot settings page save', async () => {
    await page.goto(URLS.admin + 'chat/chatbot/settings');
    await page.getByRole('heading', { name: 'Seaded' }).isVisible();
    
    await page.getByRole('button', { name: 'Salvesta' }).click();
    const toastSelector = '.toast__content';
    await expect(page.locator(toastSelector)).toBeVisible();
    await expect(page.locator(toastSelector)).toContainText('Värskendamine õnnestus');
});

test('Chatbot welcome message page open', async () => {
    await page.goto(URLS.admin + 'chat/chatbot/welcome-message');
    await expect(page.getByRole('heading', { name: 'Tervitussõnum' })).toBeVisible();
});

test('Chatbot welcome message page save', async () => {
    await page.goto(URLS.admin + 'chat/chatbot/welcome-message');
    await page.getByRole('heading', { name: 'Tervitussõnum' }).isVisible();

    await page.getByRole('button', { name: 'Salvesta' }).click();
    const toastSelector = '.toast__content';
    await expect(page.locator(toastSelector)).toBeVisible();
    await expect(page.locator(toastSelector)).toContainText('Tervitust muudeti edukalt');
});

test('Chatbot appearance page open', async () => {
    await page.goto(URLS.admin + 'chat/chatbot/appearance');
    await expect(page.getByRole('heading', { name: 'Välimus ja käitumine' })).toBeVisible();
});

test('Chatbot appearance page save', async () => {
    await page.goto(URLS.admin + 'chat/chatbot/appearance');
    await page.getByRole('heading', { name: 'Välimus ja käitumine' }).isVisible();
    await page.getByRole('button', { name: 'Salvesta' }).click();
    const toastSelector = '.toast__content';
    await expect(page.locator(toastSelector)).toBeVisible();
    await expect(page.locator(toastSelector)).toContainText('Värskendamine õnnestus');
});

test('Chatbot emergency notice page open', async () => {
    await page.goto(URLS.admin + 'chat/chatbot/emergency-notices');
    await expect(page.getByRole('heading', { name: 'Erakorralised teated' })).toBeVisible();
});

test('Chatbot emergency notice page save', async () => {
    await page.goto(URLS.admin + 'chat/chatbot/emergency-notices');
    await page.getByRole('heading', { name: 'Erakorralised teated' }).isVisible();

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    
    // Fill both date fields with today's date
    await page.getByRole('textbox').nth(1).fill(today);
    await page.getByRole('textbox').nth(2).fill(today);

    await page.getByRole('button', { name: 'Salvesta' }).click();
    const toastSelector = '.toast__content';
    await expect(page.locator(toastSelector)).toBeVisible();
    await expect(page.locator(toastSelector)).toContainText('Teate seadeid muudeti edukalt');
});

test('Chatbot feedback page open', async () => {
    await page.goto(URLS.admin + 'chat/chatbot/feedback');
    await expect(page.getByRole('heading', { name: 'Tagasiside' })).toBeVisible();
});

test('Chatbot feedback page save', async () => {
    await page.goto(URLS.admin + 'chat/chatbot/feedback');
    await page.getByRole('heading', { name: 'Tagasiside' }).isVisible();

    await page.getByRole('button', { name: 'Salvesta' }).click();
    const toastSelector = '.toast__content';
    await expect(page.locator(toastSelector)).toBeVisible();
    await expect(page.locator(toastSelector)).toContainText('Värskendamine õnnestus');
});

test('Working time page open', async () => {
    await page.goto(URLS.admin + 'chat/working-time');
    await expect(page.getByRole('heading', { name: 'Asutuse tööaeg' })).toBeVisible();
});

test('Working time page save', async () => {
    await page.goto(URLS.admin + 'chat/working-time');
    await page.getByRole('heading', { name: 'Asutuse tööaeg' }).isVisible();
    await page.getByRole('button', { name: 'Salvesta' }).click();
    const toastSelector = '.toast__content';
    await expect(page.locator(toastSelector)).toBeVisible();
    await expect(page.locator(toastSelector)).toContainText('Värskendamine õnnestus');
});

test('Chat session length page open', async () => {
    await page.goto(URLS.admin + 'chat/session-length');
    await expect(page.getByRole('heading', { name: 'Sessiooni pikkus' })).toBeVisible();
});

test('Chat session length page save', async () => {
    await page.goto(URLS.admin + 'chat/session-length');
    await page.getByRole('heading', { name: 'Sessiooni pikkus' }).isVisible();
    await page.getByRole('button', { name: 'Salvesta' }).click();
    const toastSelector = '.toast__content';
    await expect(page.locator(toastSelector)).toBeVisible();
    await expect(page.locator(toastSelector)).toContainText('Sessiooni pikkuse muutmine õnnestus');
});