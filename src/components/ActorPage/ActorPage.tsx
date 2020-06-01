import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

type Props = {};

const useClasses = makeStyles({
  root: {
    display: 'flex',
    height: '100%'
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
  }
})

const ActorPage: FC<Props> = () => {

  const { root, imageBox, contentBox } = useClasses();

  return <div className={root}>
    <div className={imageBox}>
      <img src="" alt=""/>
    </div>
    <div className={contentBox}>
      <div>
        <Typography variant="caption">
          Test
        </Typography>
        <Typography variant="body2">

        </Typography>
      </div>
    </div>
  </div>
};

export default ActorPage;
