import React, { Component } from 'react';
import ReactDom from 'react-dom';
import GifPlayer from 'react-gif-player';
import { Grid, Row, Col } from 'react-bootstrap';
import RightAnswer from './../../img/right_answer.gif';


const Right = ({ onClick }) => (
  <div>
    <Row>
      <Col xs={6} xsOffset={3} sm={6} smOffset={3} md={6} mdOffset={3} lg={6} lgOffset={3}>
       <div className="right_answer">
          <button onClick={onClick} className="btn btn-success next-btn">
            Right! Next
          </button>
          <GifPlayer className="gif" gif={RightAnswer} still={RightAnswer} />
       </div>
      </Col>
    </Row>
  </div>
);

export default Right;
