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

## Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Email Service**: EmailJS for contact forms

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

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary to EDIMED Medical Centre.

## Contact

For inquiries about the website or medical services, please visit our contact page or reach out directly to the medical centre.