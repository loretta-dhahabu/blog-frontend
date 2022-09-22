import React, { useEffect, useState } from 'react'
import Container from "react-bootstrap/Container"
import Articles from './Articles'

function Home ()
{
    const [ articles, setArticles ] = useState( [] )
    
    useEffect( () =>
    {
        fetch( "http://localhost:9292/articles" )
            .then( ( response ) => response.json() )
            .then( ( data ) =>
            {
                console.log( data );
                setArticles( data );
            } );
    }, [])

    return (
      <Container>
        {articles.map((article) => (
          <Articles key={article.id} article={article} />
        ))}
      </Container>
    );
}

export default Home;