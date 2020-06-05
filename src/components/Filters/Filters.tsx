import React, { FC } from 'react';
import { useFormik } from 'formik';
import { Button, FormControl, InputLabel, MenuItem, Select, Slider, Typography } from '@material-ui/core';
import * as Yup from 'yup';

type Props = {};

const initialValues = {
  age: [20, 37],
  sex: 'Чоловік'
};

const Filters: FC<Props> = () => {


  function valuetext(value: number) {
    return `${value}`;
  }

  const onSubmit = (val: any) => {
    console.log(val);
  }

  const { values, handleChange, handleBlur, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({}),
    onSubmit
  })

  const handleSliderChange = (event: any, value: any) => {
    setFieldValue('age', value);
  };

  return <form onSubmit={handleSubmit} style={{ width: 320, display: 'flex', flexDirection: 'column', padding: 16 }}>
    <FormControl>
      <Typography id="range-slider" color="textSecondary" gutterBottom variant="caption" style={{textAlign: 'left'}}>
        Вік
      </Typography>
      <Slider
        name="age"
        value={values.age}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </FormControl>
    <FormControl>
      <InputLabel id="sex-select">Стать</InputLabel>
      <Select labelId="sex-select" name="sex" value={values.sex} onChange={handleChange}>
        <MenuItem value="Чоловік">Чоловік</MenuItem>
        <MenuItem value="Жінка">Жінка</MenuItem>
      </Select>
    </FormControl>

    <Button type="submit">
      Submit
    </Button>
  </form>
};

export default Filters;
