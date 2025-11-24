import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, Users, Heart, Stethoscope, Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const doctors = [
    {
      name: "Dr. Sarah Mitchell",
      specialty: "Family Medicine",
      credentials: "MD, Board Certified",
      experience: "15+ years",
      bio: "Dr. Mitchell leads our family medicine department with a focus on comprehensive healthcare for all ages. Her patient-centered approach emphasizes preventive care and building lasting relationships with families.",
    },
    {
      name: "Dr. James Peterson",
      specialty: "Internal Medicine",
      credentials: "MD, FACP",
      experience: "12+ years",
      bio: "A specialist in internal medicine, Dr. Peterson excels in diagnosing and managing complex medical conditions. His dedication to thorough evaluations ensures accurate diagnoses and effective treatment plans.",
    },
    {
      name: "Dr. Maria Rodriguez",
      specialty: "Pediatrics",
      credentials: "MD, FAAP",
      experience: "10+ years",
      bio: "Dr. Rodriguez is passionate about pediatric care, from newborns to adolescents. She creates a welcoming environment where children feel comfortable and parents feel confident in their child's healthcare.",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Cardiology",
      credentials: "MD, FACC",
      experience: "14+ years",
      bio: "As our cardiology specialist, Dr. Chen provides comprehensive heart care including preventive screenings, treatment of cardiovascular conditions, and patient education for heart-healthy lifestyles.",
    },
    {
      name: "Dr. Emily Johnson",
      specialty: "Dermatology",
      credentials: "MD, FAAD",
      experience: "8+ years",
      bio: "Dr. Johnson specializes in both medical and cosmetic dermatology. She treats various skin conditions while helping patients maintain healthy, confident skin through personalized care plans.",
    },
    {
      name: "Dr. David Williams",
      specialty: "Orthopedics",
      credentials: "MD, FAAOS",
      experience: "16+ years",
      bio: "Dr. Williams focuses on musculoskeletal health, from sports injuries to joint conditions. His expertise in orthopedic care helps patients regain mobility and return to active, pain-free lives.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl font-bold text-white mb-6 animate-fade-in">About EDIMED Medical Centre</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Since 2012, we've been committed to delivering exceptional healthcare services to our community with compassion, expertise, and unwavering dedication to patient well-being.
          </p>
        </div>
      </section>

      {/* History and Expansion */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                EDIMED Medical Centre was founded in 2012 with a simple yet powerful vision: to provide accessible, high-quality healthcare that serves the entire community. What began as a single location dedicated to comprehensive medical care has grown into a trusted healthcare network with two branches, serving thousands of patients across our region.
              </p>
              <p>
                Our expansion reflects our commitment to community health and accessibility. The opening of our second branch in 2018 allowed us to extend our services to more families while maintaining the personalized care that has become our hallmark. This growth has enabled us to invest in advanced medical technology and assemble a team of highly qualified healthcare professionals.
              </p>
              <p>
                Today, EDIMED Medical Centre stands as a pillar of healthcare excellence, having served over 15,000 patients and earned the trust of countless families who rely on us for their healthcare needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver high-quality, accessible healthcare services that improve the health and well-being of every patient we serve, fostering a healthier and more vibrant community for all.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted healthcare provider in our region, recognized for clinical excellence, compassionate patient-centered care, and continuous innovation in medical services.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-accent/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Values</h3>
                <p className="text-muted-foreground">
                  Compassion, integrity, excellence, and respect guide everything we do. We treat every patient with dignity, listen attentively, and provide care with the highest professional standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Services and Achievements */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Our Services</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Comprehensive Medical Care</h3>
                    <p className="text-muted-foreground text-sm">From routine check-ups to specialized treatments, we provide complete healthcare services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Stethoscope className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Specialized Treatments</h3>
                    <p className="text-muted-foreground text-sm">Access to cardiology, dermatology, orthopedics, and other specialized medical care.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Family-Centered Approach</h3>
                    <p className="text-muted-foreground text-sm">Caring for patients of all ages with a focus on family health and wellness.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Our Achievements</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-soft">
                  <h3 className="font-semibold text-foreground mb-2">12+ Years of Service</h3>
                  <p className="text-muted-foreground text-sm">Serving our community since 2012 with consistent excellence.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-soft">
                  <h3 className="font-semibold text-foreground mb-2">5,000+ Patients Served</h3>
                  <p className="text-muted-foreground text-sm">Trusted by thousands of families for their healthcare needs.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-soft">
                  <h3 className="font-semibold text-foreground mb-2">Two Convenient Locations</h3>
                  <p className="text-muted-foreground text-sm">Expanded to better serve our growing community.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-soft">
                  <h3 className="font-semibold text-foreground mb-2">98% Patient Satisfaction</h3>
                  <p className="text-muted-foreground text-sm">Consistently high ratings for care quality and patient experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Looking Ahead</h2>
            <p className="text-lg text-muted-foreground mb-8">
              As EDIMED Medical Centre continues to grow, we're committed to expanding our services and reaching more community members. Our future plans include additional specialized clinics, enhanced telemedicine capabilities, and continued investment in cutting-edge medical technology to ensure our patients always receive the best possible care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gradient-hero">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </Link>
              <a href="tel:+2349029728060">
                <Button size="lg" variant="outline">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Today
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
