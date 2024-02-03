import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const DeletePopup = ({ open, onClose, onDelete }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Product</DialogTitle>
      <DialogContent>
        <p>Are you sure you want to delete this product?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onDelete} color="secondary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeletePopup;
