import React from 'react';
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material/';
import FiberManualRecordOutlinedIcon
  from '@mui/icons-material/FiberManualRecordOutlined';

const AppBulletListTitle = ({title}) => (
  <Typography variant="h5">
    {title}
  </Typography>
);

const AppBulletListItens = ({itens}) => {
  return (
    <List>
      {itens.map (item => (
        <ListItem key={item.id}>
          <ListItemIcon><FiberManualRecordOutlinedIcon /> </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
  );
};

const AppBulletList = ({date, bullets}) => {
  return (
    <Card>
      <CardContent>
        <AppBulletListTitle title={date} />
        <AppBulletListItens itens={bullets} />
      </CardContent>
    </Card>
  );
};
export default AppBulletList;
