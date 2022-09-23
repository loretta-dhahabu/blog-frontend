import React from 'react'
// import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Article from './Article';


function Articles ({article}) {
    return (
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
                <Article article={ article } />
          </Col>
        ))}
      </Row>
    );
}

export default Articles;