import React from 'react';
import { Typography, Link, Box } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
  return (
    <footer>
      <Box align="center" display="flex" justifyContent="space-around" paddingBottom='10px'>
        <Typography>
          <GitHubIcon></GitHubIcon>
          <Link href="https://github.com/ArtemSirobaba">@ArtemSirobaba</Link>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {new Date().getFullYear()}
        </Typography>
        <Typography>
          <GitHubIcon></GitHubIcon>
          <Link href="https://github.com/khovricheva">@khovricheva</Link>
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
