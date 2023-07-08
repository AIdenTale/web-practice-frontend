import ArticleCard from "./article-card";

function ArticlesGrid({ cardsData, className }) {
  return (
    <div className={"articles-grid " + className}>
      {cardsData.map((data, index) => {
        return (
          <ArticleCard title={data.title}
            src={data.backgroundSource}
            body={data.body}
            key={index} />
        );
      })}
    </div>
  );
}

export default ArticlesGrid;