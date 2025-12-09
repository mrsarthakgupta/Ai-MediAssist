'use client';

import { useState } from 'react';
import { Check, Heart, Shield, Mic, Users, Clock, Globe, Smartphone } from 'lucide-react';

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('features');

  const freeFeatures = [
    {
      icon: <Mic className="w-5 h-5 text-blue-500" />,
      title: 'Voice Interaction',
      description: 'Natural voice conversations with AI medical assistant'
    },
    {
      icon: <Heart className="w-5 h-5 text-red-500" />,
      title: 'Health Information',
      description: 'Access to verified medical information and health tips'
    },
    {
      icon: <Shield className="w-5 h-5 text-green-500" />,
      title: 'Symptom Assessment',
      description: 'Preliminary symptom analysis and guidance (not diagnostic)'
    },
    {
      icon: <Clock className="w-5 h-5 text-purple-500" />,
      title: '24/7 Availability',
      description: 'Round-the-clock access to health information and support'
    },
    {
      icon: <Globe className="w-5 h-5 text-orange-500" />,
      title: 'Multiple Languages',
      description: 'Support for English, Spanish, French, and 10+ more languages'
    },
    {
      icon: <Smartphone className="w-5 h-5 text-indigo-500" />,
      title: 'Cross-Platform',
      description: 'Available on mobile, tablet, web, and smart speakers'
    }
  ];

  const limitations = [
    'Not a replacement for professional medical advice',
    'Limited to general health information and guidance',
    'Cannot prescribe medications or treatments',
    'Emergency situations require immediate professional care'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Your AI Medical Assistant
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Get instant access to reliable health information through natural voice conversations. 
            Completely free, always available, designed with your privacy in mind.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-gray-900 mb-2">Free</div>
              <div className="text-gray-600">Forever, for everyone</div>
            </div>
            
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors mb-4 text-lg">
              Start Using Now
            </button>
            
            <p className="text-sm text-gray-500 text-center">
              No signup required • No credit card needed
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-2">
          <div className="flex space-x-1">
            {[
              { id: 'features', label: 'Features', icon: <Heart className="w-4 h-4" /> },
              { id: 'safety', label: 'Safety & Privacy', icon: <Shield className="w-4 h-4" /> },
              { id: 'support', label: 'Support', icon: <Users className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors flex-1 justify-center ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Features Tab */}
        {activeTab === 'features' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Everything You Need, Completely Free
              </h2>
              <p className="text-xl text-gray-600">
                Our AI medical voice assistant provides comprehensive health support at no cost
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {freeFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Usage Examples */}
            <div className="bg-blue-50 rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                How You Can Use It
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">💬 "I have a headache, what should I do?"</h4>
                  <p className="text-gray-600 text-sm">Get immediate guidance on headache management, when to rest, and when to seek medical attention.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">💬 "Explain diabetes to me"</h4>
                  <p className="text-gray-600 text-sm">Receive clear, easy-to-understand explanations about medical conditions and health topics.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">💬 "What are healthy breakfast options?"</h4>
                  <p className="text-gray-600 text-sm">Get personalized nutrition advice and healthy lifestyle recommendations.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">💬 "Should I see a doctor?"</h4>
                  <p className="text-gray-600 text-sm">Receive guidance on when symptoms warrant professional medical attention.</p>
                </div>
              </div>
            </div>

            {/* Important Limitations */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-semibold text-amber-900 mb-4">Important: Medical Disclaimers</h3>
              <ul className="space-y-2">
                {limitations.map((limitation, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-amber-800 text-sm">{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Safety & Privacy Tab */}
        {activeTab === 'safety' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your Privacy & Safety First
              </h2>
              <p className="text-xl text-gray-600">
                We prioritize your privacy and ensure all health information is handled securely
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-900 mb-3">🔒 Data Encryption</h3>
                  <p className="text-green-800">All conversations are encrypted end-to-end and stored securely.</p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-900 mb-3">🚫 No Data Sharing</h3>
                  <p className="text-blue-800">We never share your health conversations with third parties.</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-purple-900 mb-3">🗑️ Auto-Delete</h3>
                  <p className="text-purple-800">Conversation history is automatically deleted after 24 hours.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-red-900 mb-3">🚨 Emergency Detection</h3>
                  <p className="text-red-800">Automatically detects emergency situations and provides immediate guidance.</p>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="font-semibolf text-orange-900 mb-3">✅ Medical Accuracy</h3>
                  <p className="text-orange-800">Information sourced from verified medical databases and guidelines.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3">🏥 Professional Boundaries</h3>
                  <p className="text-gray-800">Clear guidance on when to seek professional medical care.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">HIPAA Compliance</h3>
              <p className="text-gray-700 mb-4">
                While our service is free and doesn't require personal identification, we maintain HIPAA-level 
                security standards for all health-related conversations.
              </p>
              <p className="text-gray-600 text-sm">
                For complete privacy policy and terms of use, visit our legal documentation.
              </p>
            </div>
          </div>
        )}

        {/* Support Tab */}
        {activeTab === 'support' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Always Here to Help
              </h2>
              <p className="text-xl text-gray-600">
                Multiple ways to get support and improve your experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Voice Help</h3>
                <p className="text-gray-600 text-sm">
                  Just ask "How do I use this?" and get instant voice guidance.
                </p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Community Forum</h3>
                <p className="text-gray-600 text-sm">
                  Connect with other users and share experiences (no health data shared).
                </p>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Feedback</h3>
                <p className="text-gray-600 text-sm">
                  Help us improve by sharing your suggestions and experiences.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Is this really completely free?</h4>
                  <p className="text-gray-600">Yes, our AI medical voice assistant is completely free to use, forever. No hidden fees, no premium tiers.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Can I use this for emergencies?</h4>
                  <p className="text-gray-600">While our AI can detect emergency situations and provide guidance, always call emergency services (911) for immediate medical emergencies.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">What languages are supported?</h4>
                  <p className="text-gray-600">We currently support English, Spanish, French, German, Italian, Portuguese, Dutch, and 8 additional languages, with more being added regularly.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">How accurate is the medical information?</h4>
                  <p className="text-gray-600">Our AI is trained on verified medical databases and follows established medical guidelines. However, it's not a substitute for professional medical advice.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your Health Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust our AI medical voice assistant for reliable health information and guidance.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg">
            Try It Now - It's Free
          </button>
          <p className="text-blue-100 mt-4 text-sm">
            Available on web, mobile app, and smart speakers
          </p>
        </div>
      </div>
    </div>
  );
}