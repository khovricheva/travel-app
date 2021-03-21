import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const Copy = ({ copy, code, link }) => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(true);
    navigator.clipboard.writeText(window.location.href + link.slice(1));
    let timer = setTimeout(() => {
      setState(false);
      clearTimeout(timer);
    }, 1000);
  };

  return (
    <Button
      size="small"
      color="inherit"
      variant="outlined"
      onClick={handleClick}
    >
      {!state ? copy[code] : copy.copied[code]}
    </Button>
  );
};

export default Copy;
