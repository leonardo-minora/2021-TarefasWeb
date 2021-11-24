import React from 'react';
import Container from '@mui/material/Container';

import AppCard from './AppCardComponent';

const AppCardList = ({cards}) => (
  <Container>
    {cards.map (card => (
      <AppCard
        key={card.id}
        title={card.title}
        description={card.description}
        url={card.link}
        state={card.state}
        type={card.type}
      />
    ))}
  </Container>
);

export default AppCardList;
