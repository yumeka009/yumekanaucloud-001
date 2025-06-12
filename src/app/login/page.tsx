import Layout from '../components/layout/Layout';
import LoginForm from '../components/auth/LoginForm';

export default function LoginPage() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[calc(100vh-132px)] md:min-h-[calc(100vh-144px)] py-8 md:py-16">
        <LoginForm />
      </div>
    </Layout>
  );
} 