import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import SweetCard from './SweetCard';

const SweetRanking:React.FC = () => {
  const filePaths = ['/image/jagariko.png', '/image/poteti.png', '/image/umaibou.png'];

  const cards = filePaths.map((filePath, index) => {
    return (
      <Grid item xs={4} key={filePath}>
        <SweetCard
          filePath={filePath}
        />
      </Grid>
    );
  });

  return (
    <>
      {cards}
    </>
  );
};

export default SweetRanking;
