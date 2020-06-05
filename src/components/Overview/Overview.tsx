import React, { FC } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { actors } from '../../data/data';
import ActorCard from '../ActorCard';
import { makeStyles } from '@material-ui/core/styles';
import Filters from './../Filters';

type Props = {};

const useClasses = makeStyles({
  root: {
    height: '100%',
    padding: 32
  }
});

const Overview: FC<Props> = () => {

  const { root } = useClasses();

  // const data = JSON.parse(actors);

  console.log(actors);

  return (
    <>
      <div className={root}>
        {
          actors.map((actor: any) => {
            return <ActorCard {...actor}/>
          })
        }
        <Filters/>
      </div>
    </>
  )
};

export default Overview;
