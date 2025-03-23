import { motion } from 'framer-motion';
import { FiPieChart, FiCalendar, FiClock, FiAlertCircle } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const medicationData = [
    { name: 'Mon', adherence: 100 },
    { name: 'Tue', adherence: 90 },
    { name: 'Wed', adherence: 95 },
    { name: 'Thu', adherence: 85 },
    { name: 'Fri', adherence: 100 },
    { name: 'Sat', adherence: 100 },
    { name: 'Sun', adherence: 95 },
  ];

  const medications = [
    { name: 'Aspirin', schedule: 'Morning', nextDose: '8:00 AM' },
    { name: 'Vitamin D', schedule: 'Morning', nextDose: '8:00 AM' },
    { name: 'Omega-3', schedule: 'Evening', nextDose: '8:00 PM' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { icon: <FiPieChart />, title: 'Adherence Rate', value: '95%' },
              { icon: <FiCalendar />, title: 'Active Medications', value: '3' },
              { icon: <FiClock />, title: 'Next Dose', value: '8:00 AM' },
              { icon: <FiAlertCircle />, title: 'Refills Needed', value: '1' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-2 text-primary">{stat.icon}</div>
                <h3 className="text-lg font-semibold text-gray-700">{stat.title}</h3>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Charts and Lists */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Adherence Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h2 className="text-xl font-semibold mb-4">Weekly Adherence</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={medicationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="adherence" stroke="#646cff" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Medication List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h2 className="text-xl font-semibold mb-4">Today's Medications</h2>
              <div className="space-y-4">
                {medications.map((med, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-gray-900">{med.name}</h3>
                      <p className="text-sm text-gray-500">{med.schedule}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-primary">Next: {med.nextDose}</p>
                      <button className="mt-2 px-4 py-1 text-sm bg-primary text-white rounded-full">
                        Mark as Taken
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;