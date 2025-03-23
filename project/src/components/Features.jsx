import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAlertCircle, FiClock, FiDatabase, FiPieChart } from 'react-icons/fi';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: <FiAlertCircle size={32} />,
      title: "Smart Reminders",
      description: "Get intelligent notifications based on your medication schedule"
    },
    {
      icon: <FiClock size={32} />,
      title: "Schedule Management",
      description: "Easily manage and adjust your medication timings"
    },
    {
      icon: <FiDatabase size={32} />,
      title: "Prescription Tracking",
      description: "Keep track of your prescriptions and refill dates"
    },
    {
      icon: <FiPieChart size={32} />,
      title: "Analytics Dashboard",
      description: "View detailed insights about your medication adherence"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Better Health Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of features helps you stay on top of your medication
            schedule and maintain better health outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold shadow-lg hover:bg-secondary transition-colors">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;