import ArticleCard from "./cards/article-card";

function ArticlesGrid({ cardsData, className }) {
  return (
    <div className={"articles-grid " + className}>
      {cardsData.map((data, index) => {
        return (
          <ArticleCard 
            className="articles-grid__card"
            src={data.backgroundSource}
            title={data.title}
            body={data.body}
            path={data.path}
            key={index} />
        );
      })}
    </div>
  );
}

export default ArticlesGrid;