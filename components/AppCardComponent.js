import React from 'react';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';

import styled from 'styled-components';

const AppCardHeader = styled.h1`
   color: #1976d2;
`;

const AppCardIcon = styled (DoneOutlineRoundedIcon)`
   color: red;
`;

const AppCardDescription = styled (Typography)`
   color: #1976d2;
   font-family: Roboto;
`;

const AppCard = props => (
  <Card>
    <CardContent>
      <AppCardIcon state={props.state} />
      <AppCardHeader>{props.title}</AppCardHeader>
      <AppCardDescription>{props.description}</AppCardDescription>
    </CardContent>
  </Card>
);

export default AppCard;
