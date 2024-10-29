import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { saveCar } from '../carapi';
import CarDialog from './CarDialog';

export default function AddCar(props) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    color: "",
    fuel: "",
    modelYear:"",
    price:""
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setCar({...car, [event.target.name]: event.target.value});
  }

  const handleSave = () => {
    saveCar(car)
    .then(() => {
      // eslint-disable-next-line react/prop-types
      props.handleFetch();
      handleClose();
    })
    .catch(err => console.error(err))

  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Car
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>New Car</DialogTitle>
          <CarDialog car={car} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
