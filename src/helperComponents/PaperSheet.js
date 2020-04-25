import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/Button';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';


const styles = ({
  wrapper: {
    maxHeight: "500px",
    overflow: "auto"
  }
})


class PaperSheet extends Component {

  state = {
    part: 1,
  }

  nextPart = () => {
    const { part } = this.state;
    this.setState({
      part: part + 1
    })
  }

  prevPart = () => {
    const { part } = this.state;
    this.setState({
      part: part - 1
    })
  }

  render() {
    const range = [[0, 6], [6, 31], [31, 70], [70, 100], [100, 130], [130, 146], [146, 200]];
    const start = range[this.state.part - 1][0];
    const end = range[this.state.part - 1][1];
    const { classes } = this.props;

    return (
      <Card>
        <CardHeader title={
          <Typography variant="h4">
            {`Part ${this.state.part}`}
          </Typography>
        }/>
        <Divider />
        <CardContent>
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.wrapper}
          >
            <Grid item xs={12} sm={10}>
              <Grid container justify="center" alignItems="center">
                {[...Array(end-start).keys()].map(index => {
                  const question = index + start + 1;

                  return(
                    <Fragment key={question}>
                      <Grid item xs={2} sm={1}>
                        <Grid container justify="center">
                          <Typography><b>{question}.</b></Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={10} sm={11}>
                        <Grid container justify="center">
                          <RadioGroup
                            row
                            onChange = {this.props.selectAnswer(question)}
                            value={`${this.props.answers[question - 1]}`}
                          >
                            <FormControlLabel
                              value="1"
                              control={<Radio />}
                              label="A"
                            />
                            <FormControlLabel
                              value="2"
                              control={<Radio />}
                              label="B"
                            />
                            <FormControlLabel
                              value="3"
                              control={<Radio />}
                              label="C"
                            />
                            {this.state.part === 2 ? '' : (
                              <FormControlLabel
                                value="4"
                                control={<Radio />}
                                label="D"
                              />
                            )}
                          </RadioGroup>
                        </Grid>
                      </Grid>
                    </Fragment>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justify="center">
            <Grid item>
              <IconButton size="small" onClick={this.prevPart} disabled={this.state.part === 1}>
                <ChevronLeft />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton size="small" onClick={this.nextPart} disabled={this.state.part === 7}>
                <ChevronRight />
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    );
  }
}

PaperSheet.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  selectAnswer: PropTypes.func.isRequired,
}

export default withStyles(styles)(PaperSheet);
