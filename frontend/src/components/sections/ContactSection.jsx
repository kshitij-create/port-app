import React, { useState } from 'react';
import { personalInfo } from '../../data/mockData';
import { Linkedin, Twitter, Send, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';

// Decorative shapes
const WaveShape = ({ className }) => (
  <svg viewBox="0 0 200 100" className={className}>
    <path
      fill="currentColor"
      d="M0,50 Q25,0 50,50 T100,50 T150,50 T200,50 L200,100 L0,100 Z"
    />
  </svg>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (mock)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Message sent successfully!', {
      description: "I'll get back to you soon.",
    });

    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-[#F5F3EE] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 hidden lg:block">
        <WaveShape className="w-32 h-16 text-[#4A7AB8] rotate-90" />
      </div>
      <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-[#E85D3C] hidden lg:block" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#1E3A5F] mb-8">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white border-[#1E3A5F]/10 focus:border-[#E85D3C] rounded-lg py-6 px-4 text-[#1E3A5F] placeholder:text-[#1E3A5F]/40"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white border-[#1E3A5F]/10 focus:border-[#E85D3C] rounded-lg py-6 px-4 text-[#1E3A5F] placeholder:text-[#1E3A5F]/40"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white border-[#1E3A5F]/10 focus:border-[#E85D3C] rounded-lg px-4 py-3 text-[#1E3A5F] placeholder:text-[#1E3A5F]/40 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="bg-[#E85D3C] hover:bg-[#D14D2E] text-white font-medium px-8 py-6 rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={18} />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-medium text-[#1E3A5F] mb-4">
                  Get in Touch
                </h3>
                <p className="text-[#1E3A5F]/70">
                  Connect with me
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1E3A5F]/5 text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1E3A5F]/5 text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-all duration-300"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href={personalInfo.social.dribbble}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1E3A5F]/5 text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-all duration-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
                  </svg>
                </a>
              </div>

              {/* Email */}
              <div>
                <p className="text-sm text-[#E85D3C] font-medium mb-1">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[#1E3A5F] hover:text-[#E85D3C] transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
