import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import AutorenewIcon from '@material-ui/icons/Autorenew';



class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      paused: true,
      timeLeft: 7200,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick()  {
    const { paused, timeLeft } = this.state;
    if (timeLeft <= 0 ){
      this.props.nextStep();
    }
    else if (!paused){
      this.setState({
        timeLeft: timeLeft - 1
      })
    }
  }

  toggleTimer = () => {
    const { paused } = this.state;
    this.setState({
      paused: !paused
    });
  }

  resetTimer = () => {
    this.setState({
      timeLeft: 7200
    })
  }

  render() {
    const { timeLeft } = this.state;
    return (
      <Fragment>
        <Button
          variant="outlined"
          color="inherit"
          onClick={this.toggleTimer}
        >
        { new Date(timeLeft * 1000).toISOString().substr(11, 8) }
        </Button>
        <IconButton
          color="inherit"
          onClick={this.resetTimer}
        >
          <AutorenewIcon />
        </IconButton>
      </Fragment>
    );
  }
}

Timer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  nextStep: PropTypes.func.isRequired,
}

export default Timer;
