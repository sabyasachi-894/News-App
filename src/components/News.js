import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner/Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    // document.title = `${props.category} - News Monkey`;


    const updateNews = async () => {
        props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=7f6f192a76534b6ca9de2eb46e6d2d7a&page=${page}&pageSize=${props.pageSize}`;
        props.setProgress(30);
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
    }, [])



    const fetchMoreData = async () => {
        if (!((page + 1) > (Math.ceil(totalResults / props.pageSize)))) {
            setPage(page + 1);
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=7f6f192a76534b6ca9de2eb46e6d2d7a&page=${page}&pageSize=${props.pageSize}`;
            setLoading(true);
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(articles.concat(parsedData.articles));
            setTotalResults(parsedData.totalResults);
            setLoading(false);
        }
    }


    return (
        <>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={< Spinner />}
            >


                <div classsName="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll >
        </>
    )
}


News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News