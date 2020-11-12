import React from 'react';
import { Select, InputLabel, MenuItem } from '@material-ui/core';

type Props = {
  sweets: Array<string>
}

const SweetsDropDown: React.FC<Props> = React.memo(({ sweets }) => {
  const sweetsItems: JSX.Element[] = sweets.map((item: string) => {
    return (
      <MenuItem id={item} key={item}>
        {item}
      </MenuItem>
    );
  });

  return (
    <>
      <InputLabel id="sweet">お菓子を選択</InputLabel>
      <Select labelId="sweet" id="select" fullWidth>
        {sweetsItems}
      </Select>
    </>
  );
});

export default SweetsDropDown;
