import cn from 'classnames';
import type { VariableProps } from 'xenopomp-essentials';

interface PromptArticleProps {
  title: string;
}

type ArticleProps = VariableProps<'article', PromptArticleProps>;

// eslint-disable-next-line jsdoc/require-jsdoc
export function PromptArticle({
  title,
  className,
  children,
  ...props
}: ArticleProps) {
  return (
    <article
      className={cn(className)}
      {...props}
    >
      <h2>{title}</h2>
      {children}
    </article>
  );
}
