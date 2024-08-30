import { Page, Locator, expect } from '@playwright/test';

export const randomString = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = 'a';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const isLocator = (param: any): boolean => {
  const hasPageProps: boolean = typeof param.goto == 'function';
  const hasLocatorProps: boolean = typeof param.nth == 'function';
  return hasLocatorProps && !hasPageProps;
};

export const getDate = (daysToAdd?: number): string => {
  const current = new Date();
  const mod = new Date(current);
  if (daysToAdd) mod.setDate(mod.getDate() + daysToAdd);
  const dd = String(mod.getDate()).padStart(2, '0');
  const mm = String(mod.getMonth() + 1).padStart(2, '0');
  const yyyy = mod.getFullYear();

  return dd + '-' + mm + '-' + yyyy;
};

export const getFormattedDate = (daysToAdd?: number): string => {
  const current = new Date();
  const mod = new Date(current);
  if (daysToAdd) mod.setDate(mod.getDate() + daysToAdd);
  const dd = String(mod.getDate()).padStart(2, '0');
  const mm = String(mod.getMonth() + 1).padStart(2, '0');
  const yyyy = mod.getFullYear();

  return yyyy + '-' + mm + '-' + dd;
};

export const getIsoDate = (daysToAdd?: number): string => {
  const current = new Date();
  const mod = new Date(current);
  if (daysToAdd) mod.setDate(mod.getDate() + daysToAdd);
  const yyyy = mod.getFullYear();
  const mm = String(mod.getMonth() + 1).padStart(2, '0');
  const dd = String(mod.getDate()).padStart(2, '0');
  const hh = String(mod.getHours()).padStart(2, '0');
  const min = String(mod.getMinutes()).padStart(2, '0');
  const sec = String(mod.getSeconds()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd}T${hh}:${min}:${sec}`;
};

export const getYear = (yearsToAdd?: number): string => {
  const current = new Date();
  const mod = new Date(current);
  if (yearsToAdd) mod.setFullYear(mod.getFullYear() + yearsToAdd);
  return mod.getFullYear().toString();
};

export const getMonthStringDate = (dateString: string): string => {
  const months = [
    'januari',
    'februari',
    'maart',
    'april',
    'mei',
    'juni',
    'juli',
    'augustus',
    'september',
    'oktober',
    'november',
    'december',
  ];
  const [dd, mm, yyyy] = dateString.split('-');
  const monthName = months[Number(mm) - 1];
  const dayNumber = Number(dd).toString(); // Convert day number to number and then back to string without the leading zero
  return `${dayNumber} ${monthName.replace(/\s/g, '')} ${yyyy}`;
};

export const openLinkInNewTab = async (page: Page, linkLocator: Locator, expectedUrl: string) => {
  const [newPage] = await Promise.all([page.waitForEvent('popup'), linkLocator.click()]);
  await newPage.waitForLoadState();
  await newPage.bringToFront();

  const url = newPage.url();
  expect(url).toContain(expectedUrl);
};

export const normalizeNumber = (value: string): number => {
  return parseFloat(value.replace(/\./g, '').replace(',', '.'));
};
