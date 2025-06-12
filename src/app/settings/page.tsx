// app/settings/page.tsx
"use client";

import { useState } from 'react';
import SettingsSidebar from "../components/settings/SettingSidebar";
import CurrentSettings from "../components/settings/CurrentSettings";
import EmailSettings from "../components/settings/EmailSettings";
import Layout from '../components/layout/Layout';
import PasswordSettings from '../components/settings/PasswordSettings';
import PrivacySettings from '../components/settings/PrivacySettings';
import PlanSettings from '../components/settings/PlanSettings';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'email':
        return <EmailSettings />;
      case 'password':
        return <PasswordSettings />;
      case 'privacy':
        return <PrivacySettings />;
      case 'plan':
        return <PlanSettings />
      default:
        return <CurrentSettings />;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen w-full max-w-[1600px] flex items-start justify-center">
        <div className="flex p-[40px] gap-8 justify-center">
          {/* Sidebar Navigation */}
          <div className="w-96">
            <SettingsSidebar 
              activeItem={activeTab}
              onItemClick={setActiveTab}
            />
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>

    </Layout>
  );
}