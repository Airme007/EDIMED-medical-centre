import { useState } from "react";
import Navigation from "@/components/Navigation.jsx";
import Footer from "@/components/Footer.jsx";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Heart, Baby, TestTube, Shield, Users, Clock, Award } from "lucide-react";
const heroImage = "/IMG_4803.PNG";

const Index = () => {

  const services = [
    {
      icon: Stethoscope,
      title: "General Consultation",
      description: "Comprehensive health check-ups and medical consultations for all ages.",
    },
    {
      icon: Baby,
      title: "Maternity Care",
      description: "Complete prenatal and postnatal care for mothers and babies.",
    },
    {
      icon: TestTube,
      title: "Lab Testing",
      description: "State-of-the-art laboratory services with accurate and fast results.",
    },
    {
      icon: Shield,
      title: "Immunization",
      description: "Vaccination services for children and adults to prevent diseases.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chikezie",
      text: "The care I received at CarePoint was exceptional. The doctors are knowledgeable, compassionate, and truly listen to their patients.",
      rating: 5,
    },
    {
      name: "Emmanuel Chukwu",
      text: "Clean, modern facilities and friendly staff. They made my family feel comfortable and well cared for. Highly recommend!",
      rating: 5,
    },
    {
      name: "Chika Okafor",
      text: "I've been coming here for years. The quality of care is outstanding and the wait times are minimal. Best clinic in the area!",
      rating: 5,
    },
  ];

  const stats = [
    { icon: Users, label: "Happy Patients", value: "5,000+" },
    { icon: Award, label: "Years of Service", value: "12+" },
    { icon: Users, label: "Healthcare Staff", value: "26" },
    { icon: Clock, label: "24/7 Emergency", value: "Available" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImage}
            alt="Modern medical clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
              Service To Humanity
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Comprehensive healthcare services for your whole family. Expert staff, modern facilities, and compassionate care in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg font-semibold shadow-2xl shadow-primary/50"
                >
                  Contact Us
                </Button>
              </Link>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary text-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold text-accent-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Welcome to EDIMED Medical Centre</h2>
            <p className="text-lg text-muted-foreground mb-8">
              For over 12 years, EDIMED Medical Centre has been the trusted healthcare provider in our community. We combine advanced medical technology with compassionate care to deliver the best health outcomes for our patients.
            </p>
            <p className="text-lg text-muted-foreground">
              Our team of experienced staff and healthcare professionals is dedicated to providing comprehensive medical services in a comfortable, welcoming environment. Your health and well-being are at the heart of everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Our Medical Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of healthcare services to meet all your medical needs under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button
                size="lg"
                className="gradient-hero"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">What Our Patients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Hear from some of our satisfied patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Heart key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and experience healthcare the way it should be - personal, professional, and patient-focused.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg font-semibold"
            >
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
