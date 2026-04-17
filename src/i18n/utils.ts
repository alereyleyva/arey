import { getCollection, type CollectionEntry } from 'astro:content';
import { copy, defaultLocale, type Locale } from '@/i18n/config';

type BlogEntry = CollectionEntry<'blog'>;

export function getLocaleCopy(locale: Locale) {
  return copy[locale];
}

export function isDefaultLocale(locale: Locale) {
  return locale === defaultLocale;
}

export function getLocalizedPath(locale: Locale, path = '') {
  const normalizedPath = path.replace(/^\/+|\/+$/g, '');
  if (isDefaultLocale(locale)) {
    return normalizedPath ? `/${normalizedPath}` : '/';
  }

  return normalizedPath ? `/${locale}/${normalizedPath}` : `/${locale}`;
}

export function getPostSlug(post: BlogEntry) {
  return post.id.split('/').slice(1).join('/');
}

export function getPostUrl(locale: Locale, post: BlogEntry) {
  return getLocalizedPath(locale, `blog/${getPostSlug(post)}`);
}

export function formatDate(locale: Locale, date: Date) {
  return locale === 'es'
    ? date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
    : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function formatListDate(date: Date) {
  return date.toISOString().slice(0, 10).replace(/-/g, '.');
}

export async function getPostsByLocale(locale: Locale) {
  const posts = await getCollection('blog', ({ data }) => !data.draft && data.locale === locale);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPostByLocaleAndSlug(locale: Locale, slug: string) {
  const posts = await getPostsByLocale(locale);
  return posts.find((post) => getPostSlug(post) === slug);
}

export async function getAlternatePost(post: BlogEntry, locale: Locale) {
  const posts = await getCollection(
    'blog',
    ({ data }) =>
      !data.draft &&
      data.translationKey === post.data.translationKey &&
      data.locale === locale
  );

  return posts[0];
}
