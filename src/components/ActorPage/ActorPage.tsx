import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, InputLabel, TextField, Typography } from '@material-ui/core';
import { actors } from '../../data/data';
import { Link, useParams } from 'react-router-dom';


type Props = {};

const useClasses = makeStyles({
  root: {
    display: 'flex',
    height: '100%',
    padding: 32
  },
  imageBox: {
    flexGrow: 1,
    '& img': {
      width: '100%',
      objectFit: 'contain'
    }
  },
  contentBox: {
    flexGrow: 1
  },
  contentField: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      margin: '0 16px 0 0'
    }
  },
  fieldWrapper: {
    display: 'flex',
    alignItems: 'baseline',
    '& label': {
      width: 120
    }
  },
  cursorPointer: {
    cursor: 'pointer'
  }
})

const ActorPage: FC<Props> = () => {

  const { root, imageBox, contentBox, fieldWrapper, cursorPointer } = useClasses();
  const { id } = useParams();

  const actor = actors.find((item: any) => {
    return +item.id === +id
  })

  type Actor = ReturnType<typeof actor | any>;

  const {
    id: userId, src, lastName, firstName, age, country, city, bodyConstitution, chest, chin, ears, eyeColor, eyeShape, faceShape, forehead,
    hairColor, hairLength, hasBeard, hasMustache, hasPiercing, hasTattoo, height, hips, lips, noseType, readyToRelocate, sex, videoLink,
    skills, waist, weight
  }: Actor = actor;


  return <div>
    <div style={{ width: 'fit-content', margin: '32px' }}>
      <Button component={Link} to="/" variant="contained" color="primary">
        Назад
      </Button>
    </div>
    <div className={root}>

      <div className={imageBox}>
        <img src={src} alt=""/>
        <Typography variant="h5" color="primary">
          {`${lastName} ${firstName}`}
        </Typography>
        <div style={{width: '100%'}}>
          <iframe style={{width: '100%'}} height="315" src={videoLink} frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
        </div>
      </div>
      <div className={contentBox}>
        <div>
          <Typography variant="h3" color="primary">
            Інформація про актора
          </Typography>
          <div style={{ padding: '0 32px', width: 600 }}>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Вік
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={age}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Країна
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={country}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Місто
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={city}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Статура
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={bodyConstitution}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Груди
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={chest}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Підборіддя
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={chin}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Вуха
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={ears}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Колір очей
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={eyeColor}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Форма очей
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={eyeShape}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Форма лиця
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={faceShape}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Лоб
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={forehead}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Колір фолосся
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={hairColor}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Довжина волосся
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={hairLength}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Наявність бороди
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={hasBeard}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Наявність вус
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={hasMustache}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Наявність пірсингу
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={hasPiercing}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Наявність тату
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={hasTattoo}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Висота
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={height}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Стегна
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={hips}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Губи
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={lips}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Форма носу
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={noseType}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Готовність переїхати
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={readyToRelocate}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Стать
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={sex}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Уміння
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={skills}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Талія
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={waist}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
            <div className={fieldWrapper}>
              <InputLabel shrink>
                <Typography color="primary">
                  Вага
                </Typography>
              </InputLabel>
              <TextField
                disabled
                defaultValue={weight}
                fullWidth
                InputProps={{
                  readOnly: true,
                  classes: { input: cursorPointer }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default ActorPage;
