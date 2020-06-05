import React, { FC } from 'react';
import { useFormik } from 'formik';
import {
  Button, Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Typography
} from '@material-ui/core';
import * as Yup from 'yup';
import { actors } from '../../data/data';
import { actorsDataSuccess } from '../../slices/actors';
import { useDispatch } from 'react-redux';


type Props = {};

const initialValues = {
  age: [18, 100],
  sex: 'Чоловік',
  city: 'Київ',
  readyToRelocate: false,
  bodyConstitution: 'Ектоморф',
  height: [60, 200],
  weight: [40, 150],
  chest: [70, 150],
  waist: [50, 140],
  hips: [70, 150],
  country: 'Україна'
};

const Filters: FC<Props> = () => {
  function valuetext(value: number) {
    return `${value}`;
  }

  const dispatch = useDispatch()

  const valueBetween = (values: any, value: any) => {
    return value >= values[0] && value <= values[1];
  }

  const onSubmit = (val: any) => {
    console.log(val);

    const matchActors = actors.filter((actor: any) => {
      const {
        id: userId, src, lastName, firstName, age, country, city, bodyConstitution, chest, chin, ears, eyeColor, eyeShape, faceShape, forehead,
        hairColor, hairLength, hasBeard, hasMustache, hasPiercing, hasTattoo, height, hips, lips, noseType, readyToRelocate, sex,
        skills, waist, weight
      } = actor;

      return valueBetween(val.age, age) && val.sex === sex && val.city === city &&
        val.readyToRelocate === readyToRelocate && val.bodyConstitution === bodyConstitution &&
        valueBetween(val.height, height) && valueBetween(val.weight, weight) && valueBetween(val.chest, chest) &&
        valueBetween(val.waist, waist) && valueBetween(val.hips, hips) && val.country === country
    })

    dispatch(actorsDataSuccess(matchActors));

    console.log(matchActors);
  }

  const { values, handleChange, handleBlur, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({}),
    onSubmit
  })

  const handleSliderChange = (name: any) => (event: any, value: any) => {
    setFieldValue(name, value);
  };

  return <form onSubmit={handleSubmit} style={{ width: 320, display: 'flex', flexDirection: 'column', padding: 16 }}>
    <FormControl>
      <Typography id="range-slider" color="textSecondary" gutterBottom variant="caption" style={{ textAlign: 'left' }}>
        Вік
      </Typography>
      <Slider
        name="age"
        value={values.age}
        onChange={handleSliderChange('age')}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={18}
        max={100}
        marks={[{ value: 18, label: 18 }, { value: 100, label: 100 }]}
      />
    </FormControl>
    <FormControl>
      <InputLabel id="sex-select">Стать</InputLabel>
      <Select labelId="sex-select" name="sex" value={values.sex} onChange={handleChange}>
        <MenuItem value="Чоловік">Чоловік</MenuItem>
        <MenuItem value="Жінка">Жінка</MenuItem>
      </Select>
    </FormControl>
    <FormControl>
      <InputLabel id="city-select">
        Місто
      </InputLabel>
      <Select labelId="city-select" name="city" value={values.city} onChange={handleChange}>
        <MenuItem value="Київ">Київ</MenuItem>
        <MenuItem value="Львів">Львів</MenuItem>
        <MenuItem value="Одеса">Одеса</MenuItem>
        <MenuItem value="Харків">Харків</MenuItem>
        <MenuItem value="Черкаси">Черкаси</MenuItem>
      </Select>
    </FormControl>
    <FormControl>
      <InputLabel id="country-select">
        Місто
      </InputLabel>
      <Select labelId="country-select" name="country" value={values.country} onChange={handleChange}>
        <MenuItem value="Україна">Україна</MenuItem>
        <MenuItem value="Росія">Росія</MenuItem>
      </Select>
    </FormControl>
    <FormControlLabel
      control={<Checkbox name="readyToRelocate" checked={values.readyToRelocate} onChange={handleChange}
      />}
      label="Готовність переїхати"/>

    <FormControl>
      <InputLabel id="sex-select">Статура</InputLabel>
      <Select labelId="sex-select" name="bodyConstitution" value={values.bodyConstitution} onChange={handleChange}>
        <MenuItem value="Ектоморф">Ектоморф</MenuItem>
        <MenuItem value="Мезоморф">Мезоморф</MenuItem>
        <MenuItem value="Ендоморф">Ендоморф</MenuItem>
      </Select>
    </FormControl>

    <FormControl>
      <Typography id="range-slider" color="textSecondary" gutterBottom variant="caption"
                  style={{ textAlign: 'left' }}>
        Вік
      </Typography>
      <Slider
        name="height"
        value={values.height}
        onChange={handleSliderChange('height')}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        max={200}
        min={60}
        marks={[{ value: 60, label: 60 }, { value: 200, label: 200 }]}
      />
    </FormControl>

    <FormControl>
      <Typography id="range-slider" color="textSecondary" gutterBottom variant="caption"
                  style={{ textAlign: 'left' }}>
        Вага
      </Typography>
      <Slider
        name="weight"
        value={values.weight}
        onChange={handleSliderChange('weight')}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={40}
        max={150}
        marks={[{ value: 40, label: 40 }, { value: 150, label: 150 }]}
      />
    </FormControl>

    <FormControl>
      <Typography id="range-slider" color="textSecondary" gutterBottom variant="caption"
                  style={{ textAlign: 'left' }}>
        Груди
      </Typography>
      <Slider
        name="chest"
        value={values.chest}
        onChange={handleSliderChange('chest')}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={70}
        max={150}
        marks={[{ value: 70, label: 70 }, { value: 150, label: 150 }]}
      />
    </FormControl>

    <FormControl>
      <Typography id="range-slider" color="textSecondary" gutterBottom variant="caption"
                  style={{ textAlign: 'left' }}>
        Талія
      </Typography>
      <Slider
        name="waist"
        value={values.waist}
        onChange={handleSliderChange('waist')}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={50}
        max={140}
        marks={[{ value: 50, label: 50 }, { value: 140, label: 140 }]}
      />
    </FormControl>

    <FormControl>
      <Typography id="range-slider" color="textSecondary" gutterBottom variant="caption"
                  style={{ textAlign: 'left' }}>
        Стегна
      </Typography>
      <Slider
        name="hips"
        value={values.hips}
        onChange={handleSliderChange('hips')}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={70}
        max={150}
        marks={[{ value: 70, label: 70 }, { value: 150, label: 150 }]}
      />
    </FormControl>

    <Button type="submit" variant="contained" color="primary">
      Підібрати актора
    </Button>
  </form>
};

export default Filters;
