import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'A Stack of RSS',
        description: 'Mike Learning a New Stack',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: '<language>en-us</language>',
    });
}