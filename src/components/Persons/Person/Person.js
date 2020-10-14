import React, { Component } from 'react';
import PropTypes from 'prop-type';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElementRef = react.creactRef();
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }
  render() {
    console.log('Person.js is rendering');
    return (
      <Aux>
          <p onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old!
        </p>
          <p>{this.props.children}</p>
          <input
            key="i3",
            ref={this.inputElementRef}
            type="text"
            onChange={this.props.changed}
            value={this.props.name} />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: propTypes.func,
  name: propTypes.string,
  age: propTypes.number,
  changed: propTypes.func
};

export default withClass(Person, classes.Person);
