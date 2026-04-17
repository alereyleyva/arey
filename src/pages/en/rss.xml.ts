import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPostsByLocale, getPostUrl } from '@/i18n/utils';

export async function GET(context: APIContext) {
  const posts = await getPostsByLocale('en');

  return rss({
    title: 'Alejandro Rey',
    description: 'Writing about software engineering, AI, and technical things.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: getPostUrl('en', post),
    })),
  });
}
