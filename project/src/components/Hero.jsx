import { motion } from "framer-motion";
import { FiClock, FiCalendar, FiCheckCircle } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-primary to-secondary overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Manage Your Medications
              <span className="block text-light mt-4">With Confidence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl">
              Stay on track with your medication schedule using our intelligent
              reminder system and comprehensive management tools.
            </p>
            <div className="flex flex-wrap gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-primary rounded-full font-semibold shadow-lg text-lg"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border-2 border-white text-white rounded-full font-semibold text-lg"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {[
              {
                icon: <FiClock size={32} />,
                title: "Smart Reminders",
                description: "Never miss a dose with intelligent scheduling",
              },
              {
                icon: <FiCalendar size={32} />,
                title: "Prescription Tracking",
                description: "Keep track of refills and renewals",
              },
              {
                icon: <FiCheckCircle size={32} />,
                title: "Adherence Monitoring",
                description: "Track your medication compliance",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-200 text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full"
            initial={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100, 0],
              transition: {
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
