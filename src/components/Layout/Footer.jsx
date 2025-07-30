import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';
import { useContent } from '../../context/ContentContext';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { content } = useContent();
  const { theme, changeTheme } = useTheme();

  const themeOptions = [
    { name: 'green', color: '#10b981', label: 'Green' },
    { name: 'blue', color: '#3b82f6', label: 'Blue' },
    { name: 'purple', color: '#8b5cf6', label: 'Purple' },
    { name: 'red', color: '#ef4444', label: 'Red' }
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="theme-bg-primary p-2 rounded-full">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{content.schoolName}</h3>
                <p className="text-gray-300">{content.tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              {content.aboutText.slice(0, 200)}...
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:theme-text-primary transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:theme-text-primary transition-colors">Academics</Link></li>
              <li><Link to="/infrastructure" className="text-gray-300 hover:theme-text-primary transition-colors">Infrastructure</Link></li>
              <li><Link to="/admissions" className="text-gray-300 hover:theme-text-primary transition-colors">Admissions</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:theme-text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 theme-text-primary" />
                <span className="text-gray-300">{content.contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 theme-text-primary" />
                <span className="text-gray-300">{content.contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 theme-text-primary mt-1" />
                <span className="text-gray-300">{content.contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          {/* Theme Switcher */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm mr-2">Theme:</span>
              {themeOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={() => changeTheme(option.name)}
                  className={`w-8 h-8 rounded-full transition-all duration-200 hover:scale-110 ${
                    theme === option.name 
                      ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-800' 
                      : 'hover:ring-1 hover:ring-white hover:ring-offset-1 hover:ring-offset-gray-800'
                  }`}
                  style={{ backgroundColor: option.color }}
                  title={option.label}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center">
          <p className="text-gray-300">
            © 2025 {content.schoolName}. All rights reserved. | CBSE Affiliation No: 1234567
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;