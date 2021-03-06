import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TappableButton from './components/TappableButton';
import ProjectIngredients from './ProjectIngredients';
import './Join.css';


// The join screen
class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onCodeChange = this.onCodeChange.bind(this);
  }

  componentDidMount() {
    if (this.inputEl) {
      this.inputEl.setAttribute('nochilddrag', 'nochilddrag'); // avoid dragscroll on container
      this.inputEl.focus();
    }
  }

  onCodeChange(event) {
    const code = event.target.value.toLowerCase();
    this.setState({code});
  }

  // For the enter keypress
  onSubmit(event) {
    event.preventDefault();
    this.onStart();
  }

  onStart() {
    const {code, name} = this.state;
    this.props.onNext({code, name});
  }

  render() {
    const {modelEl} = this.props;

    return (
      <div className="Join">
        <form className="Global-content" action="#" onSubmit={this.onSubmit}>
          <div className="Global-title">{`Here's a new model for you to train:`}</div>
          <div className="Join-model-text">{modelEl}</div>
          <div className="Join-details" style={{marginTop: 20, marginBottom: 20}}>
            <ProjectIngredients />
          </div>
          {/*<div className="Global-title">{`What's your group code?`}</div>
          <input
            ref={(el) => { this.inputEl = el; }} 
            className="Join-input"
            type="text"
            placeholder="otter"
            value={code}
            onChange={this.onCodeChange} />
          <input type="button" value="Next" style={{display: 'none'}} />*/}
          <TappableButton
            style={{marginBottom: 20}}
            // disabled={code.length === 0}
            onClick={this.onStart}>Next</TappableButton>
        </form>
      </div>
    );
  }
}
Join.propTypes = {
  modelEl: PropTypes.node.isRequired,
  onNext: PropTypes.func.isRequired
};

export default Join;
