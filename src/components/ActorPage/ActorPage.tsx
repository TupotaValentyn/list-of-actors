import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, TextField, Typography } from '@material-ui/core';
import { actors } from '../../data/data';
import { useParams } from 'react-router-dom';


type Props = {};

const useClasses = makeStyles({
  root: {
    display: 'flex',
    height: '100%',
    padding: 32
  },
  imageBox: {
    width: 300,
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
    hairColor, hairLength, hasBeard, hasMustache, hasPiercing, hasTattoo, height, hips, lips, noseType, readyToRelocate, sex,
    skills, waist, weight
  }: Actor = actor;

  return <div className={root}>
    <div className={imageBox}>
      <img src={src} alt=""/>
      <Typography variant="h5" color="primary">
        {`${lastName} ${firstName}`}
      </Typography>
    </div>
    <div className={contentBox}>
      <div>
        <Typography variant="h3" color="primary">
          Actor info
        </Typography>
        <div style={{ padding: '0 32px', width: 600 }}>
          <div className={fieldWrapper}>
            <InputLabel shrink>
              <Typography color="primary">
                Age
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
                Country
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
                city
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
                Body Constitution
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
                Chest
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
                Chin
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
                Ears
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
                Eye Color
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
                Eye Shape
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
                Face Shape
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
                Forehead
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
                Hair Color
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
                Hair Length
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
                Has Beard
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
                Has Mustache
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
                Has Piercing
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
                Has Tattoo
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
                Height
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
                Hips
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
                Lips
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
                Nose Type
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
                Ready to Relocate
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
                Sex
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
                Skills
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
                Waist
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
                Weight
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
};

export default ActorPage;
