const cards = [
  {
    id: 1,
    type: 'task',
    title: 'Documentation',
    description: 'Find in-depth information about Next.js features and API.',
    link: 'https://nextjs.org/docs',
    state: 'open',
  },
  {
    id: 2,
    title: 'Learn',
    type: 'event',
    description: 'Learn about Next.js in an interactive course with quizzes!',
    link: 'https://nextjs.org/learn',
    state: 'done',
  },
  {
    id: 3,
    title: 'Examples',
    type: 'note',
    description: 'Discover and deploy boilerplate example Next.js projects.',
    link: 'https://github.com/vercel/next.js/tree/master/examples',
    state: 'open',
  },
  {
    id: 4,
    title: 'Deploy',
    type: 'task',
    description: 'Instantly deploy your Next.js site to a public URL with Vercel.',
    link: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    state: 'open',
  },
];

export default cards;
