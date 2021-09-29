import React from 'react';
import {Card, CardContent, Typography} from '@mui/material/';

const AppBulletList = props => (
  <Card>
    <CardContent>
      <Typography variant="h4">
        {props.title}
      </Typography>
      <Typography variant="body2">
        bullets
      </Typography>
    </CardContent>
  </Card>
);

export default AppBulletList;
