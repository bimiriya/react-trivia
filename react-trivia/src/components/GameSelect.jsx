import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import GameQuestions from './GameQuestions';
import { Grid, Row, Col } from 'react-bootstrap';

class GameSelect extends Component {
  constructor(counter) {
    super(counter);
    this.state = {
      categories: '',
      category: '',
      type: '',
      difficulty: '',
      selected: null,
      counter
    };
  }

  componentWillMount() {
    this.getCategories();
  }

  getCategories() {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data =>
        data.trivia_categories.map(category => ({
          id: `${category.id}`,
          name: `${category.name}`
        }))
      )
      .then(categories =>
        this.setState({
          categories
        })
      )
      .catch(error => console.log(error));
  }

  handleChange(event) {
    // console.log(event.target.id);
    const name = event.target.id;
    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.selected(true);
    this.setState({
      selected: true
    });
  }

  render() {
    const { categories } = this.state;
    const { selected } = this.state;
    // const { counter } = this.props;
    // const { addCounter } = this.props;
    // console.log(categories.length);
    // console.log(this.state);
    console.log(this.state);

    return (
      <div>
        {selected ? (
          <GameQuestions
            right={this.props.right}
            counter={this.props.counter}
            category={this.state.category}
            type={this.state.type}
            diff={this.state.difficulty}
          />
        ) : (
          <div>
            <Grid>
              <Row>
                <Col xs={12} sm={12} md={10} mdOffset={1} lg={10} lgOffset={1}>
                  <form id="selecting" onSubmit={this.handleSubmit.bind(this)}>
                    <Row>
                      <Col xs={12} sm={12} md={12} lg={12}>
                        <FormGroup controlId="category">
                          <ControlLabel>Select Category</ControlLabel>
                          <FormControl
                            componentClass="select"
                            placeholder="select"
                            value={this.state.value}
                            onChange={this.handleChange.bind(this)}
                          >
                            <option value="select">All Categories</option>
                            {categories.length > 0
                              ? categories.map(cat => {
                                  return (
                                    <option key={cat.id} value={cat.id}>
                                      {cat.name}
                                    </option>
                                  );
                                })
                              : null}
                          </FormControl>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={6}>
                        <FormGroup controlId="type">
                          <ControlLabel>Select Type</ControlLabel>
                          <FormControl
                            componentClass="select"
                            placeholder="select"
                            onChange={this.handleChange.bind(this)}
                          >
                            <option value="select">Any Type</option>
                            <option value="boolean">True of False</option>
                            <option value="multiple">Multiple Choice</option>
                          </FormControl>
                        </FormGroup>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={6}>
                        <FormGroup controlId="difficulty">
                          <ControlLabel>Select Difficulty</ControlLabel>
                          <FormControl
                            componentClass="select"
                            placeholder="select"
                            value={this.state.value}
                            onChange={this.handleChange.bind(this)}
                          >
                            <option value="select">Any Difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                          </FormControl>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xs={12}
                        sm={12}
                        md={6}
                        mdOffset={3}
                        lg={6}
                        lgOffset={3}
                      >
                        <Button className="btn btn-warning" type="submit">
                          <span>Play</span>
                        </Button>
                      </Col>
                    </Row>
                  </form>
                </Col>
              </Row>
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

GameSelect.propTypes = {};

export default GameSelect;
