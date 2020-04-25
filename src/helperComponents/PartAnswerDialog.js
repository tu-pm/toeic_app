import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class PartAnswerDialog extends Component {

  render() {
    const { showed, part, hideDialog, data }  = this.props;
    const start_index = [0, 6, 31, 70, 100, 130, 146, 200][part - 1];
    const n_cols = Math.floor((data.n_quesions - 1) / 10 + 1)
    return (
       <Dialog
        open={showed}
        onClose={hideDialog}
      >
        <DialogTitle>{`Part ${part}`}</DialogTitle>
        <DialogContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Câu</TableCell>
                {[...Array(data.n_questions).keys()].map( index => (
                  <TableCell key={index}>
                      {start_index + index + 1}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  Đáp án
                </TableCell>
                {data.comparision.map((value, index) => (
                  <TableCell key={index}>
                    <Typography color={value[0] !== value[1] ? "error" : "primary"}>
                      {['A', 'B', 'C', 'D'][value[1] - 1]}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </DialogContent>
        <DialogActions>
          <Button onClick={hideDialog}>
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

PartAnswerDialog.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default PartAnswerDialog;
