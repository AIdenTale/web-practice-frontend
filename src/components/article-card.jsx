function ArticleCard({ title, body, src }) {
  return (
    <div className="article-card" style={{ backgroundImage: `url(${src})` }}>
      <div className="article-card__overlay">
        <h1 className="article-card__title">{title}</h1>
        <p className="article-card__body">{body}</p>
      </div>
    </div>
  );
}

export default ArticleCard;