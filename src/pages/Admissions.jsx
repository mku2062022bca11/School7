import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Users, CreditCard, Calendar, Download, Send } from 'lucide-react';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import { useContent } from '../context/ContentContext';

const Admissions = () => {
  const { content } = useContent();
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    grade: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    previousSchool: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully! We will contact you soon.');
    setFormData({
      studentName: '',
      dateOfBirth: '',
      grade: '',
      parentName: '',
      email: '',
      phone: '',
      address: '',
      previousSchool: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <Section className="relative min-h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/home-5.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Join Our Family
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-light"
          >
            Admissions Open for Academic Year 2024-25
          </motion.p>
        </div>
      </Section>

      {/* Admission Process */}
      <Section background="white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Admission Process</h2>
          <p className="text-lg md:text-xl text-gray-600">Simple steps to join our school community</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {content.admissions.process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="text-center h-full">
                <div className="theme-bg-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 theme-bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">{step.step}</h3>
                <p className="text-sm md:text-base text-gray-600">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Fee Structure */}
      <Section background="green">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Fee Structure</h2>
          <p className="text-lg md:text-xl text-gray-600">Transparent and affordable fee structure for all grades</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Grade</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Tuition Fee</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Other Fees</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Total Annual</th>
                  </tr>
                </thead>
                <tbody>
                  {content.admissions.fees.map((fee, index) => (
                    <motion.tr
                      key={fee.grade}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 font-medium text-gray-800">{fee.grade}</td>
                      <td className="py-3 px-4 text-gray-600">{fee.tuitionFee}</td>
                      <td className="py-3 px-4 text-gray-600">{fee.otherFees}</td>
                      <td className="py-3 px-4 font-semibold theme-text-primary">{fee.total}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 theme-bg-primary-light rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Fees are subject to annual revision. Additional charges may apply for transportation, meals, and extracurricular activities.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Document Requirements */}
      <Section background="white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Required Documents</h2>
          <p className="text-lg md:text-xl text-gray-600">Please prepare these documents for the admission process</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.admissions.requirements.map((requirement, index) => (
                <motion.div
                  key={requirement}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50"
                >
                  <CheckCircle className="h-5 w-5 theme-text-primary flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Admission Form */}
      <Section background="gray">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Online Admission Form</h2>
          <p className="text-lg md:text-xl text-gray-600">Fill out the form below to start your admission process</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 theme-border-primary focus:border-transparent"
                    placeholder="Enter student's full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 theme-border-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Grade Applying For *
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 theme-border-primary focus:border-transparent"
                  >
                    <option value="">Select Grade</option>
                    <option value="nursery">Nursery</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={`class-${i + 1}`}>Class {i + 1}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 theme-border-primary focus:border-transparent"
                    placeholder="Enter parent/guardian name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 theme-border-primary focus:border-transparent"
                    placeholder="Enter email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 theme-border-primary focus:border-transparent"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 theme-border-primary focus:border-transparent"
                  placeholder="Enter complete address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Previous School (if applicable)
                </label>
                <input
                  type="text"
                  name="previousSchool"
                  value={formData.previousSchool}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 theme-border-primary focus:border-transparent"
                  placeholder="Enter previous school name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 theme-border-primary focus:border-transparent"
                  placeholder="Any additional information or questions"
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="theme-bg-primary theme-bg-primary-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Submit Application
                </button>
              </div>
            </form>
          </Card>
        </div>
      </Section>

      {/* Important Dates */}
      <Section background="white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Important Dates</h2>
          <p className="text-lg md:text-xl text-gray-600">Mark your calendar for admission deadlines</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: 'Application Opens', date: 'January 15, 2024', icon: Calendar },
              { title: 'Application Deadline', date: 'March 31, 2024', icon: FileText },
              { title: 'Entrance Test', date: 'April 15, 2024', icon: Users },
              { title: 'Results Declaration', date: 'April 30, 2024', icon: CheckCircle }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="flex items-center space-x-4">
                    <div className="theme-bg-primary-light w-12 h-12 rounded-full flex items-center justify-center">
                      <item.icon className="h-6 w-6 theme-text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                      <p className="theme-text-primary font-medium">{item.date}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Admissions;