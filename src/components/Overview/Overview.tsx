import React, { FC } from 'react';
import ActorCard from '../ActorCard';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { RootStore } from '../../reducers';
import { Typography } from '@material-ui/core';

type Props = {};

const useClasses = makeStyles({
  root: {
    height: '100%',
    padding: 32
  }
});

const Overview: FC<Props> = () => {

  const { root } = useClasses();
  const actors = useSelector((store: RootStore) => store.actorsData);

  console.log(actors);

  return (
    <>
      <div className={root}>
        {
          actors.payload?.length ? actors.payload?.map((actor: any) => {
            return <ActorCard {...actor}/>
          }) : <Typography>No data</Typography>
        }
      </div>
    </>
  )
};

export default Overview;
