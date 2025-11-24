# EDIMED Medical Centre

A modern, responsive website for EDIMED Medical Centre, providing comprehensive healthcare services to the community.

## About

EDIMED Medical Centre has been serving the community for over 12 years, offering compassionate and professional healthcare services. This website showcases our medical services, team, and facilities, making it easy for patients to learn about and access our care.

## Features

- **Responsive Design**: Optimized for all devices - desktop, tablet, and mobile
- **Service Information**: Detailed information about our medical services including:
  - General Consultation
  - Maternity Care
  - Lab Testing
  - Immunization
- **Patient Testimonials**: Reviews and feedback from our satisfied patients
- **Contact Information**: Easy access to our location and contact details
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS for a professional appearance

## 🛠️ Technologies Used

### Frontend Framework
- **React 18.3.1** - Modern JavaScript library for building user interfaces
- **Vite 5.4.19** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components built on Radix UI
- **Lucide React** - Beautiful icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### External Services
- **EmailJS** - Email service for contact forms
- **Google Maps** - Location embedding
- **Google Fonts** - Typography (Inter & Merriweather)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Airme007/EDIMED-medical-centre.git
```

2. Navigate to the project directory:
```bash
cd EDIMED-medical-centre
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run build:dev` - Build the project in development mode
- `npm run lint` - Run ESLint for code linting
- `npm run preview` - Preview the production build locally

## 📞 Contact Information

**EDIMED Medical Centre**
- **Address**: New Stadium Road, Ikot Ekpene, Akwa Ibom State, Nigeria
- **Phone**: +234 902 972 8060
- **Email**: info@edimedcentre.com
- **Emergency**: 24/7 Available

## 🔧 Configuration

### EmailJS Setup
To enable contact form functionality:

1. Create an EmailJS account at [emailjs.com](https://www.emailjs.com)
2. Set up an email service and template
3. Update the configuration in `src/pages/Contact.jsx`:
   ```javascript
   const serviceId = "your_service_id";
   const templateId = "your_template_id";
   const publicKey = "your_public_key";
   ```

### Environment Variables
Create a `.env` file for sensitive configuration:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navigation.jsx  # Main navigation
│   ├── Footer.jsx      # Site footer
│   └── ...
├── pages/              # Page components
│   ├── Index.jsx       # Home page
│   ├── About.jsx       # About page
│   ├── Services.jsx    # Services page
│   ├── Contact.jsx     # Contact page
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## 🤝 Contributing

We welcome contributions to improve EDIMED Medical Centre's online presence!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software for EDIMED Medical Centre. All rights reserved.

## 🙏 Acknowledgments

- **shadcn/ui** for beautiful UI components
- **Tailwind CSS** for utility-first styling
- **Lucide** for consistent iconography
- **EmailJS** for seamless email integration
- **Google Maps** for location services

## 📊 Project Stats

- **React Components**: 50+ reusable components
- **Pages**: 5 main pages + 404 page
- **UI Components**: Complete shadcn/ui integration
- **Performance**: Optimized with Vite for fast loading
- **Accessibility**: WCAG compliant design

---

**Built with ❤️ for EDIMED Medical Centre - Your Trusted Community Healthcare Partner**

*For technical support or inquiries, please contact our development team.*