import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GameQuestions extends Component {
  constructor(category, type, diff) {
    super(category, type, diff);
    this.state = {
      category,
      type,
      diff
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
    .then(data => console.log(data))

  }

  // componentDidMount() {

  // }

  // componentWillReceiveProps(nextProps) {

  // }

  // shouldComponentUpdate(nextProps, nextState) {

  // }

  // componentWillUpdate(nextProps, nextState) {

  // }

  // componentDidUpdate(prevProps, prevState) {

  // }

  // componentWillUnmount() {

  // }

  render() {
    return (
      <div>

      </div>
    );
  }
}

GameQuestions.propTypes = {

};

export default GameQuestions;