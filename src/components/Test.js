import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Material UI core packages
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// App Components
import PaperSheet from '../helperComponents/PaperSheet';

class Test extends Component {

  submit = () => {
    if(window.confirm('Xác nhận nộp bài thi?')){
      this.props.nextStep();
    }
  }

  render() {
    return (
      <Fragment>
        <Grid container spacing={24} justify="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <PaperSheet
              selectAnswer={this.props.selectAnswer}
              answers={this.props.answers}
            />
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              size="large"
              variant="contained"
              onClick={this.submit}
            >
              Nộp bài
            </Button>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

Test.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Test;
