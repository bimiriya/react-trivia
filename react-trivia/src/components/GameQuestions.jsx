import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

class GameQuestions extends Component {
  constructor(category, type, diff) {
    super(category, type, diff);
    this.state = {
      category,
      type,
      diff,
      questions: '',
      counter: 0
    };
  }

  componentWillMount() {
    // console.log(this.state)
    const { category } = this.props;
    const { type } = this.props;
    const { diff } = this.props;
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&type=${type}&difficulty=${diff}`;
    console.log(url);

    // console.log(category)
    fetch(url)
      .then(response => response.json())
      .then(data =>
        data.results.map(quest => ({
          question: `${quest.question}`,
          right: `${quest.correct_answer}`,
          wrong: `${quest.incorrect_answers}`
        }))
      )
      .then(questions =>
        this.setState({
          questions
        })
      );
  }

  handleRightAnswer() {
    console.log('yaaaa')
  }

  render() {
    const { questions } = this.state;
    return (
      <div>
        {questions.length > 0 ? (
          <Grid>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <div className="question text-center">
                  <h1>{questions[this.state.counter].question}</h1>
                </div>
              </Col>
            </Row>
            <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <button onClick={this.handleRightAnswer} className="answer btn">{questions[this.state.counter].right}</button>
            </Col>
            </Row>
            <Row>
            <Col xs={12} sm={12} md={6} mdOffset={3} lg={6} lgOffset={3} >
            <button className="btn next-btn">Next</button>
            </Col>
            </Row>
          </Grid>
        ) : null}
      </div>
    );
  }
}

GameQuestions.propTypes = {};

export default GameQuestions;
