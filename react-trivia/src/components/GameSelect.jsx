import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class GameSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: '',
      category:'',
      type:'',
      difficulty:'',
      selected: null
    }

  }

  componentWillMount() {
    this.getCategories();
  }

  getCategories() {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data => data.trivia_categories.map(category => (
        {
          id: `${category.id}`,
          name: `${category.name}`,
        }
      )))
      .then(categories => this.setState({
        categories,
      }))
      .catch(error => console.log(error))
  }

  handleChange(event) {
    console.log(event.target.id);
    const name = event.target.id;
    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      selected: true
    });
    
  }

  render() {
    const { categories } = this.state;
    const { selected } = this.state;
    console.log(categories.length);
    console.log(this.state);

    return (
      <div>

        { selected ? (<div>
          </div>)  : 
        (<div>
          <form id="selecting" onSubmit={this.handleSubmit.bind(this)} >
            <FormGroup controlId="category">
              <ControlLabel>Select Category</ControlLabel>
              <FormControl componentClass="select" placeholder="select" value={this.state.value} onChange={this.handleChange.bind(this)}>
                <option value="select">Select Category</option>
                {categories.length > 0 ?
                  categories.map(cat => {
                    return (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    )
                  }) : null
                }
              </FormControl>
            </FormGroup>
            <FormGroup controlId="type">
              <ControlLabel>Select Type</ControlLabel>
              <FormControl componentClass="select" placeholder="select" onChange={this.handleChange.bind(this)}>
                <option value="select">Select Type</option>
                <option value="boolean">True of False</option>
                <option value="multiple">Multiple Choice</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="difficulty">
              <ControlLabel>Select Difficulty</ControlLabel>
              <FormControl componentClass="select" placeholder="select" value={this.state.value} onChange={this.handleChange.bind(this)}>
                <option value="select">Select Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </FormControl>
            </FormGroup>
            <Button type="submit">Submit</Button>
          </form>
        </div>)
      }
      </div>
    );
  }
}

GameSelect.propTypes = {

};

export default GameSelect;