import React, { useEffect, useState } from 'react'
import Container from "react-bootstrap/Container"


function Home ()
{
    const [ articles, setArticles ] = useState( [] )
    
    useEffect( () =>
    {
        fetch("http://localhost:9292/articles")
          .then((response) => response.json())
            // .then( ( data ) => console.log( data ) );
        .then((data) => setArticles(data))
    }, [])

    return (
       <Container></Container>
    )
}

export default Home;