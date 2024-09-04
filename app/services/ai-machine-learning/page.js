// app/services/ai-machine-learning/page.js

import dynamic from 'next/dynamic'

const AIMachineLearningContent = dynamic(() => import('../../../components/AIMachineLearningContent'), {
  ssr: false,
  loading: () => <p>Loading...</p>
})

export default function AIMachineLearning() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4 text-center">
          AI & <span className="text-accent-500">Machine Learning</span>
        </h1>
        <p className="text-xl text-primary-700 max-w-3xl mx-auto text-center mb-16">
          Harness the power of data to create intelligent, predictive systems for your business.
        </p>
        <AIMachineLearningContent />
      </div>
    </div>
  )
}