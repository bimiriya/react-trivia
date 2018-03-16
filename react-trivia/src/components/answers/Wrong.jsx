import React from 'react';
import ReactDom from 'react-dom';
import GifPlayer from 'react-gif-player';
import { Grid, Row, Col } from 'react-bootstrap';
import WrongAnswer from './../../img/wrong_answer.gif';

const Wrong = ({ onClick }) => (
      <div>
        <Row>
          <Col xs={6} xsOffset={3} sm={6} smOffset={3} md={6} mdOffset={3} lg={6} lgOffset={3}>
            <div className="wrong_answer">
              <button onClick={onClick} className="btn btn-danger next-btn">
                Wrong! Next
              </button>
              <GifPlayer className="gif" gif={WrongAnswer} still={WrongAnswer} />
            </div>
          </Col>
        </Row>
      </div>
);


export default Wrong;