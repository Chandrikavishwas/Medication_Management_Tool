import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiHeart } from 'react-icons/fi';

const About = () => {
  const stats = [
    { icon: <FiUsers />, value: '50,000+', label: 'Active Users' },
    { icon: <FiAward />, value: '99%', label: 'User Satisfaction' },
    { icon: <FiHeart />, value: '24/7', label: 'Support' },
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      image: 'https://placehold.co/200x200/646cff/ffffff?text=SJ',
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      image: 'https://placehold.co/200x200/535bf2/ffffff?text=MC',
    },
    {
      name: 'Emily Davis',
      role: 'UX Designer',
      image: 'https://placehold.co/200x200/646cff/ffffff?text=ED',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Medication Management</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to revolutionize medication management and improve health outcomes
            through innovative technology and user-centered design.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 text-center shadow-md"
            >
              <div className="text-4xl text-primary mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <p className="text-gray-600 mb-6">
              Founded in 2025, Medication Management emerged from a simple observation: managing medications
              shouldn't be complicated. Our team of healthcare professionals and technology experts
              came together to create a solution that makes medication management effortless and
              reliable.
            </p>
            <p className="text-gray-600">
              Today, we're proud to help thousands of users stay on track with their medications,
              improving their health outcomes and peace of mind. Our commitment to innovation and
              user-centered design continues to drive us forward as we expand our services and
              reach more people in need.
            </p>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.div>
      </div>
    </div>
  );
};

export default About;