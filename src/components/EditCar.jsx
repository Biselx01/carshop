/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { updatecar } from '../carapi';
import CarDialog from './CarDialog';

export default function EditCar(props) {
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
    console.log(props.data);
    setCar({
        brand: props.data.brand,
        model: props.data.model,
        color: props.data.color,
        fuel: props.data.fuel,
        modelYear: props.data.modelYear,
        price: props.data.price
    })
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setCar({...car, [event.target.name]: event.target.value});
  }

  const handleSave = () => {
    updatecar(props.data._links.car.href, car)
    .then(() => {
        props.handleFetch();
        handleClose();
    })
    .catch(err => console.error(err))
  }

  return (
    <>
      <Button size="small" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Update Car</DialogTitle>
        <CarDialog car={car} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
