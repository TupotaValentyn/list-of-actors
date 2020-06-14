import React, { FC } from 'react';
import ActorCard from '../ActorCard';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { RootStore } from '../../reducers';
import { Typography } from '@material-ui/core';

type Props = {};

const useClasses = makeStyles({
  root: {
    justifyContent: 'center',
    height: '100%',
    padding: 32,
    display: 'grid',
    grid: 'repeat(auto-fill, 381px)/ repeat(auto-fill, 314px)',
    gridGap: 16
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
          }) : <Typography color="primary" variant="h5">Вибачте, за Вашим запитом нічого не знайдено :(</Typography>
        }
      </div>
    </>
  )
};

export default Overview;
