import type { Topic } from '@/types';

export const topics: Topic[] = [
  {
    category: 'Scope and Applications',
    items: [
      'Healthcare Informatics & Bioinformatics',
      'Energy Systems, Smart Grids & Renewable Energy Forecasting',
      'Smart Cities & Autonomous Systems',
      'Agriculture & Industrial Automation',
      'Communication Networks & Cybersecurity',
      'Sustainable Development & AI Ethics',
    ],
  },
  {
    category: 'Core Fields of Interest',
    items: [
      'Computing and Processing',
      'Signal Processing and Analysis',
      'Robotics and Control Systems',
      'Communication, Networking and Broadcast Technologies',
      'Power, Energy and Industry Applications',
      'Bioengineering',
      'Transportation',
    ],
  },
  {
    category: 'Key Topics / Keywords',
    items: [
      'Artificial Intelligence, Machine Learning, Deep Learning',
      'Data Science, Big Data Analytics',
      'Computer Vision, Image Processing',
      'Natural Language Processing (NLP), Speech Processing',
      'Robotics, Intelligent Systems',
      'Internet of Things (IoT), Edge Computing',
      'Explainable AI (XAI), Reinforcement Learning',
      'Blockchain, Human-Computer Interaction',
    ],
  },
];

export const submissionTypes = [
  {
    type: 'Full Paper',
    pages: '8–10 pages',
    description: 'Original, unpublished research contributions.',
  },
  {
    type: 'Short Paper',
    pages: '4–6 pages',
    description: 'Concise research or work-in-progress.',
  },
  {
    type: 'Industry Paper',
    pages: '4–6 pages',
    description: 'Applied AI research from industry practitioners.',
  },
  {
    type: 'Demo / Poster',
    pages: '2–4 pages',
    description: 'Live demonstrations and poster presentations.',
  },
];
