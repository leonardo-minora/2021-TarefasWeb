import React from 'react';
import Container from '@mui/material/Container';

import AppCard from './AppCardComponent';

const cards = [
  {
    id: 1,
    title: 'Documentation',
    description: 'Find in-depth information about Next.js features and API.',
    link: 'https://nextjs.org/docs',
    state: 'open',
  },
  {
    id: 2,
    title: 'Learn',
    description: 'Learn about Next.js in an interactive course with quizzes!',
    link: 'https://nextjs.org/learn',
    state: 'done',
  },
  {
    id: 3,
    title: 'Examples',
    description: 'Discover and deploy boilerplate example Next.js projects.',
    link: 'https://github.com/vercel/next.js/tree/master/examples',
    state: 'open',
  },
  {
    id: 4,
    title: 'Deploy',
    description: 'Instantly deploy your Next.js site to a public URL with Vercel.',
    link: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    state: 'open',
  },
];

const AppCardList = () => (
  <Container>
    {cards.map (card => (
      <AppCard
        key={card.id}
        title={card.title}
        description={card.description}
        url={card.link}
        state={card.state}
      />
    ))}
  </Container>
);

export default AppCardList;
