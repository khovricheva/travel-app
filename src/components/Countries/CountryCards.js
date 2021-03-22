import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import NotFound from '../NotFound/NotFound';
import { Link } from 'react-router-dom';
import {
  FiCard,
  FiCardActions,
  FiCardContent,
  FiCardMedia,
} from './FullImageCard';
import { Button } from '@material-ui/core';
import translate from '../../translate';
import Spinner from '../Spinner/Spinner';

const CountryCards = (props) => {
  const { countries } = props;
  const code = useSelector((state) => state.code);

  if (countries === 'NotFound') {
    return <NotFound />;
  }

  if (countries.length === 0) {
    return <Spinner />;
  }

  return (
    <div className="countries">
      {countries.map((item) => (
        <Box key={item.name.en} my={4} className="cardContainer">
          <FiCard className="card">
            <FiCardMedia
              media="picture"
              className="countryImage"
              alt="Country Photo"
              image={item.introPhoto}
              title="Country Photo"
            />
            <FiCardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.name[code]}
              </Typography>
              <Typography variant="body2" component="p">
                {item.capital[code]}
              </Typography>
            </FiCardContent>
            <FiCardActions>
              <Link
                className="link"
                to={`/country/${item.name.en.toLowerCase()}`}
              >
                <Button size="small" color="inherit" variant="outlined">
                  {translate.learnMore[code]}
                </Button>
              </Link>
            </FiCardActions>
          </FiCard>
        </Box>
      ))}
    </div>
  );
};

export default CountryCards;
