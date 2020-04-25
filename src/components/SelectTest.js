import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Material UI core packages
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

class SelectTest extends Component {

  render() {
    return (
      <Fragment>
        <Grid container spacing={24} alignItems="center" justify="center">
          <Grid item xs={12} md={6} lg={4} >
            <Card>
              <CardHeader title={
                <Grid container alignItems="center" justify="center">
                  <Typography variant="h6" color="secondary">Chọn bài thi</Typography>
                </Grid>
              }/>
              <Divider />
              <CardContent>
                <List component="nav">
                  {[...Array(this.props.n_tests).keys()].map( id => (
                    <ListItem
                      key={id}
                      button
                      selected={this.props.selectedTest === id }
                      onClick={e => this.props.selectTest(e, id)}
                    >
                      <ListItemText primary={`Test ${id + 1}`} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions>
                <Grid container justify="center">
                  <Button
                    color="secondary"
                    onClick={this.props.nextStep}
                    variant="contained"
                  >
                    Bắt đầu làm bài
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

SelectTest.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default SelectTest;
