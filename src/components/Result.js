import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import grey from '@material-ui/core/colors/grey';

import { data } from '../data/Ets2018';
import PartAnswerDialog from '../helperComponents/PartAnswerDialog';


const styles = theme => ({
  header: {
    textAlign: "center"
  },
  grey_700: {
    color: grey[700]
  },
  flexBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  scoreBox: {
    height: "115px",
    width: "115px",
    borderRadius: "50%",
    backgroundColor: grey[500],
  },
  innerScoreBox: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    backgroundColor: "white",
  },
  table: {
    minWidth: "400px",
  },
  tableWrapper: {
    overflowX: "auto"
  },
  maxScore: {
    color: grey[500],
    paddingTop: "10px",
  },
});


class Result extends Component {

  state = {
    part: 0,
    showed: false,
  }

  computeResult = (answers, testAnswers) => {

    const zip = arrays => arrays[0].map((_, index) => arrays.map(arrays => arrays[index]));

    const result = {
      corrects: answers.map((value, index) => value === testAnswers[index] ? 1 : 0),
      sum: arr => arr.reduce((acc, cur) => (acc + cur), 0),
      countCorrects(start, end){
        return this.sum(this.corrects.slice(start, end));
      },
    }

    const listeningScore = data.scoreMapping.listening[result.countCorrects(0, 100)];
    const readingScore = data.scoreMapping.reading[result.countCorrects(100, 200)];


    return {
      total: listeningScore + readingScore,
      listening: {
        corrects: result.countCorrects(0, 100),
        score: listeningScore,
      },
      reading: {
        corrects: result.countCorrects(100, 200),
        score: readingScore,
      },
      details: [[0, 6], [6, 31], [31, 70], [70, 100], [100, 130], [130, 146], [146, 200]].map(range => {
        return {
          n_questions: range[1] - range[0],
          corrects: result.countCorrects(range[0], range[1]),
          comparision: zip([answers.slice(range[0], range[1]), testAnswers.slice(range[0], range[1])])
        }
      })
    }
  }

  handleDetails = (index) => {
    this.setState({
      showed: true,
      part: index
    })
  }

  hideDialog = () => {
    this.setState({
      showed: false
    })
  }


  render() {
    const { answers, testAnswers, reset, classes } = this.props;
    const result = this.computeResult(answers, testAnswers);

    return (
      <Fragment>
        <Grid container spacing={24} justify="center">
          <Grid item sm={12} lg={7}>
            <Card elevation={6}>
              <CardHeader className={classes.header} title={
                <Typography
                  variant="h5"
                  className={classes.grey_700}
                >
                  Kết quả
                </Typography>
              }/>
              <Divider variant="middle"/>
              <CardContent className={classes.content}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <div className={`${classes.flexBox} ${classes.scoreBox}`}>
                      <div className={`${classes.flexBox} ${classes.innerScoreBox}`}>
                        <Typography variant="h4" className={classes.grey_700}>{result.total}</Typography>
                        <Typography className={classes.maxScore}>/990</Typography>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classes.tableWrapper}>
                      <Table className={classes.table}>
                        <TableHead>
                          <TableRow>
                            <TableCell>Part</TableCell>
                            {[1, 2, 3, 4].map(part => (
                              <TableCell key={part} align="center">{part}</TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>Số câu đúng:</TableCell>
                            {[0, 1, 2, 3].map(index => (
                              <TableCell key={index} align="center">
                                <Button
                                  variant="outlined"
                                  onClick={this.handleDetails.bind(this, index + 1)}
                                >
                                  {result.details[index].corrects}/{result.details[index].n_questions}
                                </Button>
                              </TableCell>
                            ))}
                          </TableRow>
                          <TableRow>
                            <TableCell colSpan={3}>Điểm nghe:</TableCell>
                            <TableCell colSpan={2} align="right">{result.listening.score}/495 ({result.listening.corrects}/100)</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classes.tableWrapper}>
                      <Table className={classes.table}>
                        <TableHead>
                          <TableRow>
                            <TableCell>Part</TableCell>
                            {[5, 6, 7].map(part => (
                              <TableCell key={part} align="center">{part}</TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>Số câu đúng:</TableCell>
                            {[4, 5, 6].map(index => (
                              <TableCell key={index} align="center">
                                <Button
                                  variant="outlined"
                                  onClick={this.handleDetails.bind(this, index + 1)}
                                >
                                  {result.details[index].corrects}/{result.details[index].n_questions}
                                </Button>
                              </TableCell>
                            ))}
                          </TableRow>
                          <TableRow>
                            <TableCell colSpan={3}>Điểm đọc:</TableCell>
                            <TableCell align="right">{result.reading.score}/495 ({result.reading.corrects}/100)</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions className={classes.flexBox}>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={reset}
                >
                  Làm lại
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        {this.state.showed ? (<PartAnswerDialog
          showed={this.state.showed}
          part={this.state.part}
          hideDialog={this.hideDialog}
          data={result.details[this.state.part - 1]}
        />) : ''}
      </Fragment>
    );
  }
}

Result.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default withStyles(styles)(Result);
