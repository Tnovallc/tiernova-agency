import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, Phone, Briefcase, DollarSign, Quote, Calendar } from "lucide-react";

export default function HomePage() {
  return (
    <div className="p-6 space-y-10">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-blue-600">TierNova Agency</h1>
        <p className="text-lg text-white-600">Your Path to Business Credit and Financial Growth</p>
      </header>

      {/* Services Section */}
      <section className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 space-y-2">
            <Briefcase className="w-6 h-6 text-black" />
            <h2 className="text-xl font-semibold text-gray-800">Business Credit Building</h2>
            <p className="text-gray-700">Establish and grow your business credit profile without using personal guarantees.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 space-y-2">
            <Briefcase className="w-6 h-6 text-black" />
            <h2 className="text-xl font-semibold text-gray-800">LLC &amp; EIN Setup</h2>
            <p className="text-gray-700">Professional guidance to set up your legal business entity and obtain your EIN quickly.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 space-y-2">
            <Briefcase className="w-6 h-6 text-black" />
            <h2 className="text-xl font-semibold text-gray-800">Funding Strategies</h2>
            <p className="text-gray-700">We&nbsp;help you secure funding through Tier 1, 2, and 3 credit lines and vendor accounts.</p>
          </CardContent>
        </Card>
      </section>

      {/* Pricing Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-center ">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 space-y-2">
              <DollarSign className="w-6 h-6 text-black" />
              <h3 className="text-xl font-semibold text-gray-800">Starter Plan</h3>
              <p className="text-gray-700">$199 - LLC &amp; EIN setup, vendor account guidance</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 space-y-2">
              <DollarSign className="w-6 h-6 text-black" />
              <h3 className="text-xl font-semibold text-gray-800">Growth Plan</h3>
              <p className="text-gray-700">$499 - Everything in Starter + Tier 1-2 credit building, DUNS setup</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 space-y-2">
              <DollarSign className="w-6 h-6 text-black" />
              <h3 className="text-xl font-semibold text-gray-800">Elite Plan</h3>
              <p className="text-gray-700">$999 - Full credit development, funding strategies, personalized coaching</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-center text-blue-600">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 space-y-2">
              <Quote className="w-5 h-5" />
              <p className="text-gray-700"> &ldquo;TierNova helped me secure vendor accounts within weeks! I went from no business credit to getting approved for a $5K line. Highly recommend! &rdquo;</p>
              <p className="text-sm text-gray-500">— Jordan M., Small Business Owner</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 space-y-2">
              <Quote className="w-5 h-5" />
              <p className="text-gray-700"> &ldquo;The Elite Plan was worth every penny. I received expert help and funding strategies that actually worked. My business is thriving now. &rdquo;</p>
              <p className="text-sm text-gray-500">— Maria R., Startup Founder</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Booking Section */}
      <section className="max-w-xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold text-center">Book a Consultation</h2>
        <div className="text-center text-gray-600">
          <Calendar className="w-6 h-6 mx-auto mb-2" />
          <p>Ready to build your business credit? Email us to schedule a consultation:</p>
          <p className="font-semibold text-blue-600">TierNovaAgency@gmail.com</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold text-center">Get in Touch</h2>
        <form
  action="https://formspree.io/f/xldbqvew"
  method="POST"
  className="space-y-4"
>
  <Input
    name="name"
    type="text"
    placeholder="Your Name"
    required
  />
  <Input
    name="email"
    type="email"
    placeholder="Your Email"
    required
  />
  <Textarea
    name="message"
    placeholder="How can we help you build your business credit?"
    required
  />
  <Button
    className="w-full"
    type="submit"
  >
    Submit Inquiry
  </Button>
</form>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 pt-10 border-t">
        <div className="flex justify-center gap-4 py-2">
          <Mail className="w-4 h-4" /> support@tiernovaagency.com
          <Phone className="w-4 h-4" /> (888) 555-6789
        </div>
        <p>&copy; 2025 TierNova Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}