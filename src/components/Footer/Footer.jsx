import React, { useEffect } from 'react';
import './Footer.scss';
import axios from 'axios';
// import { Typography, Link, Box } from '@material-ui/core';
// import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
 
  return (
    <footer>
      <div></div>
      {/* <Box align='center' display='flex' justifyContent='space-around'>
        <Typography>
          <GitHubIcon></GitHubIcon>
          <Link href='https://github.com/ArtemSirobaba'>@ArtemSirobaba</Link>
        </Typography>
        <Link href='https://rs.school/js/'>
          <img
            className='school-logo'
            alt='school-logo'
            src='https://rs.school/images/rs_school_js.svg'
          />
        </Link>
        <Typography>
          <GitHubIcon></GitHubIcon>
          <Link href='https://github.com/khovricheva'>@khovricheva</Link>
        </Typography>
      </Box>
      <Typography
        variant='subtitle1'
        align='center'
        color='textSecondary'
        component='p'
      >
        {new Date().getFullYear()}
      </Typography> */}
    </footer>
  );
};

export default Footer;
