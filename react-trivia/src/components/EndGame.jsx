import React, { Component } from 'react';
import ReactDom from 'react-dom';
import GifPlayer from 'react-gif-player';
import { Grid, Row, Col } from 'react-bootstrap';
import Bad from './../img/bad.gif';
import Half from './../img/half.gif';

class EndGame extends Component {
  handleClick() {
    window.location.reload();
  };
  render() {
    if (this.props.right < 5) {
      return (
        <div>
          <Grid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className="question text-center">
                <h1>{this.props.right} right answers out of 10!</h1>
              </div>
              <GifPlayer className="gif img-responsive" gif={Bad} still={Bad} />
              <button onClick={this.handleClick} className="btn play_again btn-warning">Play again</button>
            </Col>
          </Row>
          </Grid>
        </div>
      );
    } else if (this.props.right === 5) {
      return (
        <div>
          <Grid>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <div className="question text-center">
                  <h1>{this.props.right} right answers out of 10!</h1>
                </div>
                <GifPlayer className="gif" gif={Half} still={Half} />
                <button onClick={this.handleClick} className="btn play_again btn-warning">Play again</button>
              </Col>
            </Row>
          </Grid>
        </div>
      );
    } else if (this.props.right > 5) {
      return (
        <div>
          <Grid>
          <Row>
            <Col xs={10} sm={12} md={12} lg={12}>
              <div className="question text-center">
                <h1>{this.props.right} right answers out of 10!</h1>
              </div>
              <GifPlayer className="gif" gif={Half} still={Half} />
              <button onClick={this.handleClick} className="btn play_again btn-warning">Play again</button>
            </Col>
          </Row>
          </Grid>
        </div>
      );
    }
  }
}

export default EndGame;
