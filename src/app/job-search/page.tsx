// src/app/job-search/page.tsx
import Layout from '../components/layout/Layout';
import JobSearchComponent from '../components/job-search/JobSearchComponent';
const JobSearchPage = () => {
  return (
        <Layout>
            <div className="text-white min-h-screen flex flex-col items-center">
                <JobSearchComponent />
            </div>
        </Layout>
      

  );
};

export default JobSearchPage;