import React, { useEffect, useState } from 'react';
import './Country.scss';

const Country = (props) => {
  const {slug} = props.match.params; //часть url  (имя страны)
  console.log(slug)
  return <div></div>;
};

export default Country;