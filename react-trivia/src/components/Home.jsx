import React, { Component } from 'react';
import NavBar from './NavBar';
import GameSelect from './GameSelect';
import EndGame from './EndGame';

class Home extends Component {
  constructor(src, title, onClick) {
    super(src, title, onClick);
    this.state = {
      src,
      title,
      onClick,
      counter: 0,
      right: 0,
      selected: null,
    }
  }
  render() {
    const { src } = this.props;
    const { title } = this.props;
    const { onClick } = this.props;
    const { counter } = this.state;
    const { right } = this.state;
    const { select } = this.state;
    return (
      <div>
        <NavBar src={src} title={title} onClick={onClick} counter={counter} select={select}/>
        {
          this.state.counter > 10 ? <EndGame right={right}/>
          : 
          <GameSelect selected={(num) => this.setState({select: num})} right={(num) => this.setState({right: num})}  counter={(name) => this.setState({counter: name + 1})}/>
        }
      </div>
    )
  }
}
// const Home = ({src, title, onClick}) => {

//     return (
//     );

// }

export default Home;