import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiMessageSquare, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-8 h-8" />,
      title: 'Email Us',
      content: 'support@medication.com',
      link: 'mailto:support@medication.com',
      description: 'Our support team typically responds within 24 hours'
    },
    {
      icon: <FiPhone className="w-8 h-8" />,
      title: 'Call Us',
      content: ' 123-4567',
      link: 'tel:+15551234567',
      description: 'Available Monday to Friday, 9AM to 6PM '
    },
    {
      icon: <FiMapPin className="w-8 h-8" />,
      title: 'Visit Us',
      content: '123 Health Street, Medical District, ',
      link: '#',
      description: 'Book an appointment for in-person consultation'
    },
    {
      icon: <FiMessageSquare className="w-8 h-8" />,
      title: 'Live Chat',
      content: 'Start a conversation',
      link: '#',
      description: '24/7 instant support via live chat'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about Medication? We're here to help. Our team of experts is ready
            to assist you with any inquiries about our medication management platform.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-primary mb-6">{info.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
              <a
                href={info.link}
                className="text-primary hover:text-secondary transition-colors block mb-3"
              >
                {info.content}
              </a>
              <p className="text-gray-600 text-sm">{info.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}          >
          
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}          >
           
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;