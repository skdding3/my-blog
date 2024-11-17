interface Article {
  title: string;
  description: string;
  author: string;
  date: string;
}

export interface ArticleWithSlug extends Article {
  slug: string;
}
export async function importArticle(
  articleFileName: string
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/article/${articleFileName}`)) as {
    default: React.ComponentType;
    article: Article;
  };
  return {
    slug: articleFileName.replace(/(\/page)?\.mdx$/, ""),
    ...article,
  };
}
