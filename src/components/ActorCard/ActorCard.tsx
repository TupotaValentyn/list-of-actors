import React, { FC } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  firstName: string;
  lastName: string;
  banner: string;
  description: string;
  src: string;
};

const useClasses = makeStyles({
  root: {
    width: 314,
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

const ActorCard: FC<Props> = ({ firstName, lastName, description, src }) => {
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
      <CardActions>
        <Button variant="text">View</Button>
      </CardActions>
    </Card>
  );
}

export default ActorCard;
