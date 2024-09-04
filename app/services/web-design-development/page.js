import dynamic from 'next/dynamic';

const WebDesignDevelopmentContent = dynamic(() => import('../../../components/WebDesignDevelopmentContent'), { ssr: false });

export default function WebDesignDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white py-24">
      <div className="container mx-auto px-4">
        <WebDesignDevelopmentContent />
      </div>
    </div>
  );
}