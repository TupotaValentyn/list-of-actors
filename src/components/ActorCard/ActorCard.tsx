import React, { FC } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  name: string;
  banner: string;
  description: string;
};

const useClasses = makeStyles({
  root: {
    width: 314
  }
});

const ActorCard: FC<Props> = ({ name, description, banner }) => {
  const { root } = useClasses();
  return (
    <Card className={root}>
      <CardContent>
        <div>
          <img src={banner} alt="actor-banner-preview"/>
        </div>
        <Typography variant="h3">
          {name}
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
