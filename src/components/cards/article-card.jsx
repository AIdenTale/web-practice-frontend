import { Link } from "react-router-dom";

function ArticleCard({ title, body, src, className, path }) {
  return (
    <Link
      className={"article-card " + className}
      style={{ backgroundImage: `url(${src})` }}
      to={path}>
      <div className="article-card__overlay">
        <h1 className="article-card__title">{title}</h1>
        <p className="article-card__body">{body}</p>
      </div>
    </Link>
  );
}

export default ArticleCard;