import React, { FC } from 'react';
import ActorCard from '../ActorCard';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { RootStore } from '../../reducers';

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
          actors.payload?.map((actor: any) => {
            return <ActorCard {...actor}/>
          })
        }
      </div>
    </>
  )
};

export default Overview;
