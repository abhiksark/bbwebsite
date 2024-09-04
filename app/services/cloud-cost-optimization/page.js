// app/services/crm-erp-solutions/page.js

import dynamic from 'next/dynamic'

const CRMERPSolutionsContent = dynamic(() => import('../../../components/CRMERPSolutionsContent'), {
  ssr: false,
  loading: () => <p>Loading...</p>
})

export default function CRMERPSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4 text-center">
          CRM & ERP <span className="text-accent-500">Solutions</span>
        </h1>
        <p className="text-xl text-primary-700 max-w-3xl mx-auto text-center mb-16">
          Streamline your operations with tailored systems that drive efficiency and foster growth.
        </p>
        <CRMERPSolutionsContent />
      </div>
    </div>
  )
}