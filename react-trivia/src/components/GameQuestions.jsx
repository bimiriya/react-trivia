import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import Right from './answers/Right';
import Wrong from './answers/Wrong';

class GameQuestions extends Component {
  constructor(category, type, diff) {
    super(category, type, diff);
    this.state = {
      category,
      type,
      diff,
      questions: '',
      counter: 0,
      answers:[],
      isValid: null,
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
        data.results.map(quest => {
          let ans = [quest.correct_answer];
          quest.incorrect_answers.map(index => {
            ans.push(index);
          });
          let i = ans.length;
          for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = ans[i];
            ans[i] = ans[j];
            ans[j] = temp;
          }
          this.state.answers.push(ans);
          return ({
          question: `${quest.question}`,
          right: `${quest.correct_answer}`,
          wrong: `${quest.incorrect_answers}`
        })})
      )
      .then(questions =>

        this.setState({
          questions,
        })
      )
      .catch(error => console.log(error));
    }
    
  nextQuestion() {
    const add = this.state.counter + 1;
    this.setState({
      counter: add,
      isValid: null,
    })
  }

  handleRightAnswer(event) {
    console.log(event.target.name)
    if (event.target.name === this.state.questions[this.state.counter].right) {
      this.setState({
        isValid: true
      })
    } else {
      this.setState({
        isValid: 'false'
      })
    }
    console.log(this.state);
    
  }

  render() {
    const { questions } = this.state;
    const { answers } = this.state;
    const { counter } = this.state;
    // console.log(answers[counter].length);
    const finalAnswers = answers[counter];
    
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
              {  answers.length > 0 && this.state.isValid === null ? 
                finalAnswers.map(ans => {
                  if (ans===undefined) {
                    console.log(ans);                    
                  } else {
                    const answ = `${ans}`
                    return (
                      <button key={ans} name={ans} onClick={this.handleRightAnswer.bind(this)} className="answer btn">{answ}</button>
                    )
                  }
                  })  
                  : null
              }
            </Col>
            </Row>
            <Row>
            <Col xs={12} sm={12} md={6} mdOffset={3} lg={6} lgOffset={3} >
              {
        this.state.isValid ? ( this.state.isValid === true ? <Right onClick={this.nextQuestion.bind(this)}/> : <Wrong onClick={this.nextQuestion.bind(this)}/> ) : null
              }
            
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
