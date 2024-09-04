// app/services/app-design-development/page.js

import ClientOnly from '../../../components/ClientOnly';
import AppDesignDevelopmentContent from '../../../components/AppDesignDevelopmentContent';

export default function AppDesignDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white py-24">
      <div className="container mx-auto px-4">
        <ClientOnly>
          <AppDesignDevelopmentContent />
        </ClientOnly>
      </div>
    </div>
  );
}