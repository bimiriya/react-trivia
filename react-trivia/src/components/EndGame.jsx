import React, { Component } from 'react';
import ReactDom from 'react-dom';
import GifPlayer from 'react-gif-player';
import { Grid, Row, Col } from 'react-bootstrap';
import Bad from './../img/bad.gif';
import Half from './../img/half.gif';

class EndGame extends Component {

  render() {
    if (this.props.right < 5) {
      return (
        <div>
            
              <Row>
                <Col xs={6} xsOffset={3} sm={6} smOffset={3} md={6} mdOffset={3} lg={6} lgOffset={3}>
                   <GifPlayer className="gif" gif={Bad} still={Bad} />
                </Col>
              </Row>
            </div>
  
      )
    } else if (this.props.right === 5) {
      return (
        <div>

              <Row>
                <Col xs={6} xsOffset={3} sm={6} smOffset={3} md={6} mdOffset={3} lg={6} lgOffset={3}>
                   <GifPlayer className="gif" gif={Half} still={Half} />
                </Col>
              </Row>
            </div>
            )
    } else if (this.props.right > 5) {
      return (
        <div>
            <Row>
            <Col xs={12} sm={12} md={6} mdOffset={3} lg={6} lgOffset={3}>
            <div className="bad_result" >
              <Row>
                <Col xs={6} xsOffset={3} sm={6} smOffset={3} md={6} mdOffset={3} lg={6} lgOffset={3}>
                   <GifPlayer className="gif" gif={Half} still={Half} />
                </Col>
              </Row>
            </div>
            </Col>
            </Row>
        </div>)

    }
  }
}

export default EndGame;