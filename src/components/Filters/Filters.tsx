import React, { FC } from 'react';
import { useFormik } from 'formik';
import {
  Button, Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Slider, TextField,
  Typography
} from '@material-ui/core';
import * as Yup from 'yup';
import { actors } from '../../data/data';
import { actorsDataSuccess } from '../../slices/actors';
import { useDispatch } from 'react-redux';
import { Autocomplete } from '@material-ui/lab';


type Props = {};

const initialValues = {
  age: [3, 100],
  sex: '',
  city: '',
  readyToRelocate: false,
  bodyConstitution: '',
  height: [60, 200],
  weight: [30, 150],
  chest: [40, 150],
  waist: [40, 140],
  hips: [40, 150],
  country: '',
  hairColor: '',
  hairLength: '',
  faceShape: '',
  forehead: '',
  eyeShape: '',
  eyeColor: '',
  noseType: '',
  ears: '',
  lips: '',
  chin: '',
  hasMustache: false,
  hasBeard: false,
  skills: []
};

const initialSkills = [
  { value: 'Вокал' },
  { value: 'Музичні інструменти' },
  { value: 'Хореографія' },
  { value: 'Водіння авто' },
  { value: 'Сценічний бій' },
  { value: 'Володіння зброєю' },
  { value: 'Знання іноземних мов' }
]

const Filters: FC<Props> = () => {
  function valuetext(value: number) {
    return `${value}`;
  }

  const dispatch = useDispatch()

  const valueBetween = (values: any, value: any) => {
    return value >= values[0] && value <= values[1];
  }

  const convertBoolValue = (actorVal: boolean, defaultVal: string) => {
    if (defaultVal === 'Так') {
      const value = true;
      return value === actorVal;
    }

    const value = false;

    return value === actorVal;
  };

  const findMatches = (actorSkills: string[], skill: string) => {
    return actorSkills.find((actorSkill) => actorSkill === skill);
  }

  const matchAutocomplete = (actorSkills: any[], skills: string[]) => {
    const result = actorSkills.map((actorSkill: any) => {
      return skills.find((skill: string) => {
        console.log(skill);
        return actorSkill.value === skill
      });
    }).filter(Boolean);

    return result.length === actorSkills.length;
  }

  const onSubmit = (val: any) => {
    console.log(val);

    const matchActors = actors.filter((actor: any) => {
      const {
        id: userId, src, lastName, firstName, age, country, city, bodyConstitution, chest, chin, ears, eyeColor, eyeShape, faceShape, forehead,
        hairColor, hairLength, hasBeard, hasMustache, hasPiercing, hasTattoo, height, hips, lips, noseType, readyToRelocate, sex,
        skills, waist, weight
      } = actor;

      matchAutocomplete(val.skills, skills);
      return valueBetween(val.age, age) && val.sex === sex && val.city === city &&
        convertBoolValue(val.readyToRelocate, readyToRelocate) && val.bodyConstitution === bodyConstitution &&
        valueBetween(val.height, height) && valueBetween(val.weight, weight) &&
        valueBetween(val.chest, chest) &&
        valueBetween(val.waist, waist) && valueBetween(val.hips, hips) &&
        val.country === country && hairLength === val.hairLength && hairColor === val.hairColor &&
        faceShape === val.faceShape && forehead === val.forehead && eyeShape === val.eyeShape &&
        eyeColor === val.eyeColor && noseType === val.noseType && ears === val.ears &&
        lips === val.lips && chin === val.chin && convertBoolValue(val.hasMustache, hasMustache) &&
        convertBoolValue(val.hasBeard, hasBeard) && matchAutocomplete(val.skills, skills)
    })

    dispatch(actorsDataSuccess(matchActors));

  }

  const { values, handleChange, handleBlur, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({}),
    onSubmit
  })

  const handleAutocomplete = (val: any, newSkills: any) => {
    setFieldValue('skills', newSkills);
  }

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
        min={3}
        max={100}
        marks={[{ value: 3, label: 3 }, { value: 100, label: 100 }]}
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
      <InputLabel id="country-select">
        Країна
      </InputLabel>
      <Select labelId="country-select" name="country" value={values.country} onChange={handleChange}>
        <MenuItem value="Україна">Україна</MenuItem>
        <MenuItem value="Росія">Росія</MenuItem>
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
        Зріст
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
        min={30}
        max={150}
        marks={[{ value: 30, label: 30 }, { value: 150, label: 150 }]}
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
        min={40}
        max={150}
        marks={[{ value: 40, label: 40 }, { value: 150, label: 150 }]}
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
        min={40}
        max={140}
        marks={[{ value: 40, label: 40 }, { value: 140, label: 140 }]}
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
        min={40}
        max={150}
        marks={[{ value: 40, label: 40 }, { value: 150, label: 150 }]}
      />
    </FormControl>

    <FormControl>
      <InputLabel id="hairColor-select">Колір волосся</InputLabel>
      <Select labelId="hairColor-select" name="hairColor" value={values.hairColor} onChange={handleChange}>
        <MenuItem value="Русявий">Русявий</MenuItem>
        <MenuItem value="Блонд">Блонд</MenuItem>
        <MenuItem value="Чорний">Чорний</MenuItem>
        <MenuItem value="Рудий">Рудий</MenuItem>
        <MenuItem value="Каштановий">Каштановий</MenuItem>
        <MenuItem value="Світло-каштановий">Світло-каштановий</MenuItem>
        <MenuItem value="Темно-каштановий">Темно-каштановий</MenuItem>
        <MenuItem value="Сивий">Сивий</MenuItem>
        <MenuItem value="Неповторний">Неповторний</MenuItem>
      </Select>
    </FormControl>

    <FormControl>
      <InputLabel id="hairLength-select">Довжина волосся</InputLabel>
      <Select labelId="hairLength-select" name="hairLength" value={values.hairLength} onChange={handleChange}>
        <MenuItem value="Коротке">Коротке</MenuItem>
        <MenuItem value="Середня довжина">Середня довжина</MenuItem>
        <MenuItem value="Чорний">Довге</MenuItem>
      </Select>
    </FormControl>

    <FormControl>
      <InputLabel id="faceShape-select">Форма обличчя</InputLabel>
      <Select labelId="faceShape-select" name="faceShape" value={values.faceShape} onChange={handleChange}>
        <MenuItem value="Овальне">Овальне</MenuItem>
        <MenuItem value="Видовжене">Видовжене</MenuItem>
        <MenuItem value="Кругле">Кругле</MenuItem>
        <MenuItem value="Квадратне">Квадратне</MenuItem>
        <MenuItem value="Трикутне">Трикутне</MenuItem>
        <MenuItem value="Грушевидне">Грушевидне</MenuItem>
        <MenuItem value="Неповторне">Неповторне</MenuItem>
      </Select>
    </FormControl>


    <FormControl>
      <InputLabel id="forehead-select">Лоб</InputLabel>
      <Select labelId="forehead-select" name="forehead" value={values.forehead} onChange={handleChange}>
        <MenuItem value="Високий і широкий">Високий і широкий</MenuItem>
        <MenuItem value="Широкий і низький">Широкий і низький</MenuItem>
        <MenuItem value="Високий і вузький"> Високий і вузький</MenuItem>
        <MenuItem value="Прямий">Прямий</MenuItem>
        <MenuItem value="З нахилом">З нахилом</MenuItem>
      </Select>
    </FormControl>

    <FormControl>
      <InputLabel id="eyeShape-select">Форма очей</InputLabel>
      <Select labelId="eyeShape-select" name="eyeShape" value={values.eyeShape} onChange={handleChange}>
        <MenuItem value="Нависла повіка">Нависла повіка</MenuItem>
        <MenuItem value="Мигдалеподібні">Мигдалеподібні</MenuItem>
        <MenuItem value="Близько посаджені очі">Близько посаджені очі</MenuItem>
        <MenuItem value="Глибоко посаджені очі">Глибоко посаджені очі</MenuItem>
        <MenuItem value="З опущеними кутиками">З опущеними кутиками</MenuItem>
        <MenuItem value="Розкосі">Розкосі</MenuItem>
        <MenuItem value="Одне око">Одне око</MenuItem>
      </Select>
    </FormControl>

    <FormControl>
      <InputLabel id="eyeColor-select">Колір очей</InputLabel>
      <Select labelId="eyeColor-select" name="eyeColor" value={values.eyeColor} onChange={handleChange}>
        <MenuItem value="Блакитний">Блакитний</MenuItem>
        <MenuItem value="Сірий">Сірий</MenuItem>
        <MenuItem value="Сіро-блакитний">Сіро-блакитний</MenuItem>
        <MenuItem value="Зелений">Зелений</MenuItem>
        <MenuItem value="Сіро-зелений">Сіро-зелений</MenuItem>
        <MenuItem value="Темно-карий">Темно-карий</MenuItem>
        <MenuItem value="Світло-карий">Світло-карий</MenuItem>
      </Select>
    </FormControl>

    <FormControl>
      <InputLabel id="noseType-select">Форма носу</InputLabel>
      <Select labelId="noseType-select" name="noseType" value={values.noseType} onChange={handleChange}>
        <MenuItem value="Довгий ніс">Довгий ніс</MenuItem>
        <MenuItem value="Ніс картоплею">Ніс картоплею</MenuItem>
        <MenuItem value="Ніс з горбинкою">Ніс з горбинкою</MenuItem>
        <MenuItem value="Короткий ніс">Короткий ніс</MenuItem>ss
        <MenuItem value="Ніс з горбинкою">Ніс з горбинкою</MenuItem>
        <MenuItem value="Орлиний ніс">Орлиний ніс</MenuItem>
      </Select>
    </FormControl>

    <FormControl>
      <InputLabel id="ears-select">Вуха</InputLabel>
      <Select labelId="ears-select" name="ears" value={values.ears} onChange={handleChange}>
        <MenuItem value="Круглі">Вуглуваті</MenuItem>
        <MenuItem value="Вуглуваті">Вуглуваті</MenuItem>
        <MenuItem value="Загострені">Загострені</MenuItem>
        <MenuItem value="Стирчачі">Стирчачі</MenuItem>
        <MenuItem value="Широка мочка">Широка мочка</MenuItem>
        <MenuItem value="Прилягаюча мочка">Прилягаюча мочка</MenuItem>
      </Select>
    </FormControl>

    <FormControl>
      <InputLabel id="lips-select">Губи</InputLabel>
      <Select labelId="lips-select" name="lips" value={values.lips} onChange={handleChange}>
        <MenuItem value="Сердечком">Сердечком</MenuItem>
        <MenuItem value="Пухкі">Пухкі</MenuItem>
        <MenuItem value="Вузькі">Вузькі</MenuItem>
        <MenuItem value="Асиметричні">Асиметричні</MenuItem>
        <MenuItem value="З припущеними кутиками">З припущеними кутиками</MenuItem>
        <MenuItem value="З піднятими кутиками">З піднятими кутиками</MenuItem>
      </Select>
    </FormControl>

    <FormControl>
      <InputLabel id="chin-select">Підборіддя</InputLabel>
      <Select labelId="chin-select" name="chin" value={values.chin} onChange={handleChange}>
        <MenuItem value="Овальне">Овальне</MenuItem>
        <MenuItem value="Гостре">Гостре</MenuItem>
        <MenuItem value="Скошене">Скошене</MenuItem>
        <MenuItem value="Квадратне">Квадратне</MenuItem>
        <MenuItem value="Виступаюче">Виступаюче</MenuItem>
      </Select>
    </FormControl>

    <FormControlLabel
      control={<Checkbox name="hasMustache" checked={values.hasMustache} onChange={handleChange}
      />}
      label="Наявність вус"/>

    <FormControlLabel
      control={<Checkbox name="hasBeard" checked={values.hasBeard} onChange={handleChange}
      />}
      label="Наявність бороди"/>


    <Autocomplete
      style={{ margin: '0 0 16px 0' }}
      multiple
      id="tags-standard"
      options={initialSkills}
      getOptionLabel={(option) => option.value}
      onChange={handleAutocomplete}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Навички та вміння"
          placeholder="Навички та вміння"
        />
      )}
    />

    <Button type="submit" variant="contained" color="primary">
      Підібрати актора
    </Button>
  </form>
};

export default Filters;
