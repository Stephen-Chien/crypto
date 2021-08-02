import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./index.css"

export default function News() {

    let [news, setNews] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/status_updates?category=general&project_type=coin'
      )
      .then((res) => {
        setNews(res.data.status_updates);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


    return (
        <div>
            {console.log(news)}

            {news.map((item) => {
                return (
                <div className = "containerl">
                <h1>{item.description}</h1>

                </div>
                )

            })
            
            }


        


        </div>




    )
}


