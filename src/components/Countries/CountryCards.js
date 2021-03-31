import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import NotFound from '../NotFound';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
          <Card className="card">
            <CardMedia
              media="picture"
              className="countryImage"
              alt="Country Photo"
              image={item.introPhoto}
              title="Country Photo"
            />
            <CardContent
              style={{ position: 'relative', backgroundColor: 'transparent' }}
            >
              <Typography gutterBottom variant="h5" component="h2">
                {item.name[code]}
              </Typography>
              <Typography variant="body2" component="p">
                {item.capital[code]}
              </Typography>
            </CardContent>
            <CardActions style={{ position: 'relative' }}>
              <Link
                className='link'
                to={`/country/${item.name.en.toLowerCase()}`}
              >
                <Button size="small" color="inherit" variant="outlined">
                  {translate.learnMore[code]}
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Box>
      ))}
    </div>
  );
};

export default CountryCards;
