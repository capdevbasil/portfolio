export interface BloggerPost {
  title: string;
  description: string;
  date: string;
  link: string;
  category: string;
}

/**
 * Fetches posts from a public Blogger blog using the JSON feed.
 * No API key required.
 *
 * @param blogUrl - Your blogspot URL, e.g. "https://yourblog.blogspot.com"
 * @param maxResults - Number of posts to fetch (default 20)
 */
export async function fetchBloggerPosts(
  blogUrl: string,
  maxResults = 20
): Promise<BloggerPost[]> {
  const feedUrl = `${blogUrl.replace(/\/$/, '')}/feeds/posts/default?alt=json&max-results=${maxResults}`;

  const res = await fetch(feedUrl, { next: { revalidate: 3600 } });

  if (!res.ok) {
    console.error(`Failed to fetch Blogger feed: ${res.status}`);
    return [];
  }

  const data = await res.json();
  const entries = data?.feed?.entry;

  if (!Array.isArray(entries)) return [];

  return entries.map((entry: any) => {
    const title = entry.title?.$t ?? 'Untitled';
    const content = entry.content?.$t ?? entry.summary?.$t ?? '';
    const description = stripHtml(content).slice(0, 200) + (content.length > 200 ? '…' : '');
    const published = entry.published?.$t ?? '';
    const date = published ? new Date(published).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }) : '';
    const link = entry.link?.find((l: any) => l.rel === 'alternate')?.href ?? '';
    const category = entry.category?.[0]?.term ?? 'blog';

    return { title, description, date, link, category };
  });
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}
