import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GameQuestions extends Component {
  constructor(category, type, diff) {
    super(category, type, diff);
    this.state = {
      category,
      type,
      diff,
      questions: '',
      counter: 0,
    }
  }


  componentWillMount() {
    console.log(this.state)
    const {category} = this.props;
    const {type} = this.props;
    const {diff} = this.props;
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&type=${type}&difficulty=${diff}`;
    console.log(url);
    
    console.log(category)
    fetch(url)
    .then(response => response.json())
    .then(data => data.results.map(quest => ({
      question: `${quest.question}`,
      right: `${quest.correct_answer}`,
      wrong: `${quest.incorrect_answers}`,
    }
  )))
  .then(questions => this.setState({
    questions,
  }))

  }

  render() {
    // console.log(this.counter);
    // this.counter ++;
    console.log(this.state);
    const {questions} = this.state;
    console.log(questions);
    console.log(questions[this.counter]);


    return (
      <div>
        {
        
          questions.length > 0 ?
          ( <div>
              <h1>{questions[this.state.counter].question}</h1>
              <button  >Next</button>
          </div>
        ) : null
        }


      </div>
    );
  }
}

GameQuestions.propTypes = {

};

export default GameQuestions;