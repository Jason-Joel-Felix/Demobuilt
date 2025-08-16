import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Show success message or handle the submission
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Book a Consultation</h2>
            <p className="text-gray-300">Let's discuss your next landmark project</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Contact Info */}
          <div className="lg:w-1/3 p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 border-r border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-red-400 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Phone</div>
                  <div className="text-gray-300">+971 4 123 4567</div>
                  <div className="text-gray-300">+971 50 123 4567</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-red-400 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Email</div>
                  <div className="text-gray-300">info@intermassgroups.ae</div>
                  <div className="text-gray-300">projects@intermassgroups.ae</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-red-400 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Office</div>
                  <div className="text-gray-300">
                    Business Bay, Dubai<br />
                    United Arab Emirates
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors duration-300"
                    placeholder="+971 50 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select project type</option>
                    <option value="commercial">Commercial Development</option>
                    <option value="residential">Residential Complex</option>
                    <option value="hospitality">Hospitality & Tourism</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="mixed-use">Mixed-Use Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select budget range</option>
                    <option value="100m-500m">AED 100M - 500M</option>
                    <option value="500m-1b">AED 500M - 1B</option>
                    <option value="1b-5b">AED 1B - 5B</option>
                    <option value="5b+">AED 5B+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Please describe your project requirements, timeline, and any specific details..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <Send size={20} />
                Send Consultation Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;