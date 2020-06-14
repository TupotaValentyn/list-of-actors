import React, { FC } from 'react';
import { Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

type Props = {
  firstName: string;
  lastName: string;
  banner: string;
  description: string;
  src: string;
  id: number;
};

const useClasses = makeStyles({
  root: {
    width: 314,
    minHeight: 382,
    padding: 0
  },
  rootContent: {
    padding: 0
  },
  image: {
    width: '100%',
    height: 300,
    objectFit: 'cover'
  }
});

const ActorCard: FC<Props> = ({ firstName, lastName, description, src, id }) => {
  const { root, image, rootContent } = useClasses();
  return (
    <Card className={root}>
      <CardContent className={rootContent}>
        <div>
          <img className={image} src={src} alt="actor-banner-preview"/>
        </div>
        <Typography variant="h5">
          {`${lastName} ${firstName}`}
        </Typography>
        {description}
      </CardContent>
      <CardActions style={{justifyContent: 'flex-end'}}>
        <NavLink style={{textDecoration: 'none', color: 'black'}} to={`/actor/${id}`}>Перегляд</NavLink>
      </CardActions>
    </Card>
  );
}

export default ActorCard;
