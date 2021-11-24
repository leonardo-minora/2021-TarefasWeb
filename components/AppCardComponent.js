import React, {useState} from 'react';

import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/DoneOutlineRounded';
// bullet's icon
import TaskIcon from '@mui/icons-material/FiberManualRecordRounded';
import NoteIcon from '@mui/icons-material/RemoveRounded';
import EventIcon from '@mui/icons-material/CircleOutlined';

import styled from 'styled-components';

const AppCardHeader = styled.h1`
   color: #1976d2;
`;

const AppCardAvatar = props => {
  switch (props.type) {
    case 'event':
      return (
        <Avatar sx={{bgcolor: 'transparent'}}>
          <EventIcon color="primary" />
        </Avatar>
      );
    case 'note':
      return (
        <Avatar sx={{bgcolor: 'transparent'}}>
          <NoteIcon color="primary" />
        </Avatar>
      );
    default:
      return (
        <Avatar sx={{bgcolor: 'transparent'}}>
          <TaskIcon color="primary" />
        </Avatar>
      );
  }
};

const AppCardCheck = props => {
  const [check, setCardCheck] = useState (props.check);

  switch (check) {
    case 'done':
      return (
        <IconButton onClick={() => setCardCheck ('open')}>
          <CheckIcon color="primary" />
        </IconButton>
      );
    default:
      return (
        <IconButton onClick={() => setCardCheck ('done')}>
          <CheckIcon />
        </IconButton>
      );
  }
};

const AppCard = props => (
  <Card sx={{margin: 1}}>
    <CardHeader
      avatar={<AppCardAvatar type={props.type} />}
      action={<AppCardCheck check={props.state} />}
      title={props.title}
      subheader={props.description}
    />
  </Card>
);

export default AppCard;
