// React packages
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';


// Application data
import { data } from '../data/Ets2018';

// Components
import SelectTest from './SelectTest';
import Test from './Test';
import Result from './Result';
import Timer from '../helperComponents/Timer'

const styles = theme => ({
  appBarTitle: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 5,
  },
  toolbar: theme.mixins.toolbar,
});


class ToeicApp extends Component {

  state = {
    step: 1,
    selectedTest: 0,
    testAnswers: [...data.answers[0]],
    answers: [...Array(200).fill(0)],
  }

  // Reset
  reset = () => {
    this.setState({
      step: 1,
      selectedTest: 0,
      testAnswers: [...data.answers[0]],
      answers: [...Array(200).fill(0)],
    })
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  // Handle select test
  selectTest = (event, test) => {
    const index = parseInt(test)
    this.setState({
      selectedTest: index,
      testAnswers: [...data.answers[index]],
    })
  }

  // Handle select answer
  selectAnswer = qIndex => (event, value) => {
    let answers = [...this.state.answers];
    answers[parseInt(qIndex - 1)] = parseInt(value);
    this.setState({
      answers
    })
  }

  renderStep() {
    const { step, selectedTest, testAnswers, answers } = this.state;
    switch(step) {
      case 1:
        return (
          <SelectTest
            nextStep={this.nextStep}
            selectTest={this.selectTest}
            selectedTest={selectedTest}
            n_tests={data.n_tests}
          />
        );
      case 2:
        return (
          <Test
            nextStep={this.nextStep}
            selectAnswer={this.selectAnswer}
            answers={this.state.answers}
          />
        );
      case 3:
        return (
          <Result
            testAnswers={testAnswers}
            answers={answers}
            reset={this.reset}
          />
        );
    };
  }

  render() {
    const { classes } = this.props;
    const { step } = this.state;
    return (
      <Fragment>
        <CssBaseline />
        <AppBar color="secondary" position="fixed">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.appBarTitle}>
              { data.name }
            </Typography>
            {step === 2 ? <Timer
              nextStep={this.nextStep}
            /> : ''}
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.renderStep()}
        </main>
      </Fragment>
    );
  };
}

ToeicApp.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};


export default withStyles(styles)(ToeicApp);
