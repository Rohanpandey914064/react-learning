
import React, { useEffect, useState } from 'react'

const News = () => {
    const [news,setNews] = useState([]);
    const [search,setsearch] = useState("tesla");
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");
    const [currentPage,setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    function ferchdata(){
      fetch("https://newsapi.org/v2/everything?q=tesla&from=2026-02-27&sortBy=publishedAt&apiKey=b4915b37cf014d2e99401ad5cbc86386")
        .then(res => res.json())
        .then(data=>{setNews(data.articles)
          setLoading(true);
        })
        .catch(error=>{
          setError('Data Not available');
          setLoading(false)
        })
    }

    useEffect(()=>{
        ferchdata();
    },[]);
       console.log(news);
      
    const lastIndex = itemsPerPage* currentPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentNews = news.slice(firstIndex,lastIndex);
    const totalPages = Math.ceil(news.length/itemsPerPage);

    function pageIncrease(){
      setCurrentPage(currentPage + 1);
    }
    function pageDecrease(){
      setCurrentPage(currentPage - 1);
    }

    console.log(news);

    if(!loading)return <h1>Loading....</h1>
    if(error)return <h1>{error}</h1>
    if(news.length===0) <h1>No News found</h1>
  return (
    <div>
      <button className='bg-red-500' onClick={pageIncrease}>next page</button>
      <h4>Page No - {currentPage}</h4>
      <button className='bg-yellow-500' onClick={pageDecrease}>last page</button>
          <ul>        
            {
            currentNews.map((ne,index)=>(
              <div key={index}>
              <h1>{ne.title}</h1>
              <p className=''>{ne.description}</p>
              {ne.urlToImage&& (<img className='w-100 h-100 rounded-lg' src={(ne.urlToImage)} alt="photo"/>)}
              </div>
            ))
            }
        </ul>
    </div>  
  )
}

export default News