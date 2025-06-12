'use client';

import Layout from '../layout/Layout';
import MainSection from './MainSection';
import ThinkSection from './ThinkSection';
import StartSection from './StartSection';
import QuestionSection from './QuestionSection';
import CategorySection from './CategorySection';
import Speed from './SpeedUp';
import SuccessStoriesSection from './SuccessStoriesSection';
import HorizontalScrollStories from './HorizontalScrollStories';

const LandingPage = () => {
  return (
    <Layout>
      <MainSection />
      <StartSection />
      <Speed />
      <ThinkSection />
      <CategorySection />
      <SuccessStoriesSection />
      <QuestionSection />
      <HorizontalScrollStories />
    </Layout>
  );
};

export default LandingPage; 