'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="stitching-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M2 5L8 5M5 2L5 8" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stitching-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Ready to Modernize Sports Technology?</CardTitle>
              <CardDescription>
                Join me in the second Moneyball movement, built on machine learning and AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <Input id="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <Input id="subject" placeholder="Project inquiry" value={formData.subject} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[120px]" value={formData.message} onChange={handleChange} required />
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={status === 'Sending...'}>
                  {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                </Button>
                {status && <p className="text-center text-sm mt-4">{status}</p>}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}