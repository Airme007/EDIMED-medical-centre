import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Baby, TestTube, Shield, Heart, Activity, Pill, UserCheck, Microscope, Syringe, Thermometer, Ambulance } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Consultation",
      description: "Comprehensive physical examinations and health assessments for all ages. Our experienced doctors diagnose and treat a wide range of common medical conditions.",
      features: ["Health check-ups", "Diagnosis & treatment", "Preventive care", "Health counseling"],
    },
    {
      icon: Baby,
      title: "Maternity Care",
      description: "Complete prenatal and postnatal care services for expecting mothers and newborns. We ensure the health and safety of both mother and baby throughout pregnancy.",
      features: ["Prenatal check-ups", "Ultrasound services", "Postnatal care", "Breastfeeding support"],
    },
    {
      icon: TestTube,
      title: "Laboratory Testing",
      description: "State-of-the-art laboratory facilities offering a comprehensive range of diagnostic tests with accurate and timely results.",
      features: ["Blood tests", "Urine analysis", "Pathology services", "Same-day results"],
    },
    {
      icon: Shield,
      title: "Immunization Services",
      description: "Comprehensive vaccination programs for children and adults to prevent infectious diseases and maintain community health.",
      features: ["Childhood vaccines", "Adult immunizations", "Travel vaccines", "Flu shots"],
    },
    {
      icon: Heart,
      title: "Cardiology",
      description: "Expert cardiovascular care including diagnosis, treatment, and management of heart conditions and related health issues.",
      features: ["Blood pressure monitoring", "Heart disease management", "Cardiac risk assessment"],
    },
    {
      icon: Activity,
      title: "Pediatrics",
      description: "Specialized medical care for infants, children, and adolescents, focusing on growth, development, and overall well-being.",
      features: ["Well-child visits", "Growth monitoring", "Childhood illnesses", "Developmental assessments"],
    },
    {
      icon: Pill,
      title: "Pharmacy Services",
      description: "On-site pharmacy providing prescription medications, over-the-counter drugs, and expert pharmaceutical consultation.",
      features: ["Prescription filling", "Medication counseling", "Generic alternatives", "Home delivery available"],
    },
    {
      icon: UserCheck,
      title: "Chronic Disease Management",
      description: "Ongoing care and support for patients with chronic conditions such as diabetes, hypertension, and asthma.",
      features: ["Regular monitoring", "Treatment plans", "Lifestyle counseling", "Medication management"],
    },
    {
      icon: Syringe,
      title: "Surgeries & Minor Procedures",
      description: "Safe and professional minor surgical procedures and medical treatments performed in our modern facility.",
      features: ["Wound care", "Suturing", "Abscess drainage", "Mole removal"],
    },
    {
      icon: Ambulance,
      title: "Emergency Services",
      description: "24/7 emergency medical services for urgent health issues requiring immediate attention and care.",
      features: ["24/7 availability", "Emergency response", "Critical care", "Ambulance services"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-white mb-6 animate-fade-in">Our Medical Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Comprehensive healthcare solutions tailored to meet all your medical needs. Quality care, modern facilities, expert professionals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Insurance & Payment</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We accept most major insurance plans and offer flexible payment options to ensure healthcare is accessible to everyone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <Card className="shadow-soft">

              </Card>
              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-2">Payment Plans</h3>
                  <p className="text-sm text-muted-foreground">Flexible payment plans available for uninsured or out-of-pocket expenses.</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-2">Transparent Pricing</h3>
                  <p className="text-sm text-muted-foreground">Clear, upfront pricing with no hidden fees. We discuss costs before treatment.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
