/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';

export default function CarDialog({ car, handleChange }) {
  return (
    <DialogContent>
      <TextField
        margin="dense"
        name="brand"
        label="Brand"
        value={car.brand}
        onChange={handleChange}
        fullWidth
        variant="standard"
      />
      <TextField
        margin="dense"
        name="model"
        label="Model"
        value={car.model}
        onChange={handleChange}
        fullWidth
        variant="standard"
      />
      <TextField
        margin="dense"
        name="color"
        label="Color"
        value={car.color}
        onChange={handleChange}
        fullWidth
        variant="standard"
      />
      <TextField
        margin="dense"
        name="fuel"
        label="Fuel"
        value={car.fuel}
        onChange={handleChange}
        fullWidth
        variant="standard"
      />
      <TextField
        margin="dense"
        name="modelYear"
        label="Year"
        value={car.modelYear}
        onChange={handleChange}
        fullWidth
        variant="standard"
      />
      <TextField
        margin="dense"
        name="price"
        label="Price"
        value={car.price}
        onChange={handleChange}
        fullWidth
        variant="standard"
      />
    </DialogContent>
  );
};