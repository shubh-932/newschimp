import React, { useContext, useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import NewsItemShimmer from './NewsItemShimmer';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
import { LocaleContext } from '../contexts/LocaleContext';

export default function News({ category }) {

  const apiKey = process.env.REACT_APP_NEWS_API;

  const [locale] = useContext(LocaleContext);

  document.title = `NewsChimp - ${category.charAt(0).toUpperCase() + category.slice(1)}`

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.thenewsapi.com/v1/news/top?api_token=${apiKey}&locale=${locale}&categories=${category}&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setArticles((prev) => prev.concat(data.data));
        setTotalResults(data.meta.found);
      });
  }, [page, category, locale, apiKey]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <div className='container my-3'>
      <h2 className='text-center' style={{marginTop: "80px"}}>Today's Top {category.charAt(0).toUpperCase() + category.slice(1)} Headlines</h2>
      {loading && articles.length === 0 && <div className='row'>
        {
          [
            <div key='1' className="col-md-4"><NewsItemShimmer /></div>,
            <div key='2' className="col-md-4"><NewsItemShimmer /></div>,
            <div key='3' className="col-md-4"><NewsItemShimmer /></div>
          ]
        }
      </div>
      }
      <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={loading && <Spinner />} >
        <div className="container my-4">
          <div className="row">
            {
              articles.map((news) => {
                return (<div className="col-md-4" key={news.uuid}>
                  <NewsItem imageUrl={news.image_url ? news.image_url : "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"} title={news.title ? news.title.length > 45 ? news.title.slice(0, 45) + '...' : news.title : ""} source={news.source} description={news.description ? news.description.length > 90 ? news.description.slice(0, 90) + '...' : news.description : ""} author={news.author ? news.author : "Unknown"} date={news.published_at ? news.published_at : ""} newsUrl={news.url} />
                </div>)
              })
            }
          </div>
        </div>
      </InfiniteScroll>
    </div>
  )
}
