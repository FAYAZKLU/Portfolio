import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Linkedin, Github, ExternalLink, Send, MapPin } from 'lucide-react';
import { toast } from '../hooks/use-toast';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });


const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const templateParams = {
    name: formData.name,
    email: formData.email,
    message: formData.message
  };

  try {
    await emailjs.send(
      "service_bosowfs",
      "template_ww1qitb",
      templateParams,
      "RyaFcrjfpDk10YtwC"
    );

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!"
    });

    setFormData({ name: "", email: "", message: "" });

  } catch (error) {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again."
    });
  }

  setIsSubmitting(false);
};

  return (
    <motion.section
      id="contact"
      className="py-20 bg-cream"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-sage mx-auto mb-4"></div>
            <p className="text-forest/60 text-lg">Let's discuss your next project or opportunity</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-white border-sage/20 hover:border-sage transition-all duration-300">
              <h3 className="text-2xl font-bold text-forest mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-forest mb-2 block">Your Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="border-sage/30 focus:border-sage transition-colors" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-forest mb-2 block">Your Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="border-sage/30 focus:border-sage transition-colors" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-forest mb-2 block">Message</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell me about your project or opportunity..." rows={5} className="border-sage/30 focus:border-sage transition-colors resize-none" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-forest hover:bg-forest/90 text-white py-6 text-lg transition-transform hover:scale-105">
                  {isSubmitting ? 'Sending...' : (<><Send size={20} className="mr-2" />Send Message</>)}
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 bg-white border-sage/20 hover:border-sage transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-sage/10 p-3 rounded-lg"><Mail className="text-sage" size={24} /></div>
                  <div>
                    <h4 className="font-semibold text-forest mb-1">Email</h4>
                    <a href="mailto:contact@katikafayaz.dev" className="text-sage hover:text-forest transition-colors">katikafayaz.ai@gmail.com</a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white border-sage/20 hover:border-sage transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-sage/10 p-3 rounded-lg"><MapPin className="text-sage" size={24} /></div>
                  <div>
                    <h4 className="font-semibold text-forest mb-1">Location</h4>
                    <p className="text-forest/70">Vijayawada, Andhra Pradesh, India</p>
                  </div>
                </div>
              </Card>

              <div className="bg-sage/5 p-8 rounded-2xl border-2 border-sage/20">
                <h4 className="font-bold text-forest mb-4 text-xl">Connect With Me</h4>
                <div className="space-y-3">
                  <a href="https://github.com/FAYAZKLU" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-forest hover:text-sage transition-colors group"><Github size={24} /><span className="group-hover:translate-x-1 transition-transform">GitHub</span></a>
                  <a href="https://www.linkedin.com/in/k-fayaz-101007343/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-forest hover:text-sage transition-colors group"><Linkedin size={24} /><span className="group-hover:translate-x-1 transition-transform">LinkedIn</span></a>
                  </div>
              </div>

              <Card className="p-6 bg-forest text-white border-none">
                <h4 className="font-bold mb-2 text-lg">Open to Opportunities</h4>
                <p className="text-white/80">I'm currently seeking internship and full-time opportunities in Software Developemnt  and  Full-Stack Development roles</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
