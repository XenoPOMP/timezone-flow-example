import type { PropsWithChildren } from 'react';

type PromptArticleProps = PropsWithChildren<{
  title: string;
}>;

// eslint-disable-next-line jsdoc/require-jsdoc
export function PromptArticle({ title, children }: PromptArticleProps) {
  return (
    <article>
      <h2>{title}</h2>
      {children}
    </article>
  );
}
