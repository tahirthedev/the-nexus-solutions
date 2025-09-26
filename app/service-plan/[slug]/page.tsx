// app/service-plan/[slug]/page.tsx

import ClientLayout from '@/components/layouts/ClientLayout';
import styles from './service-package.module.css';
import { Metadata } from "next";

// --- generateMetadata ---
export async function generateMetadata(
  { params }: { params: Promise<any> }
): Promise<Metadata> {
  const resolved = await params;
  return {
    title: `Service Plan - ${resolved.slug}`,
    description: `Details about our ${resolved.slug} service plan.`,
  };
}

// --- Page component ---
export default async function ServicePlanDetail(
  { params }: { params: Promise<any> }
) {
  const { slug } = await params;

  const servicePackages = [
    {
      slug: "startup-website",
      name: "Essential Services",
      subtitle: "Starter",
      price: "$49999",
      period: "/project",
      features: [
        { name: "Basic Website (5 pages)", available: true },
        { name: "Logo Design Package", available: true },
        { name: "Basic SEO Setup", available: true },
        { name: "E-commerce Integration", available: false },
        { name: "Animation Services", available: false },
        { name: "Mobile App Development", available: false }
      ]
    },
    {
      slug: "pro-website",
      name: "Business Growth",
      subtitle: "Professional",
      price: "$99999",
      period: "/project",
      features: [
        { name: "Advanced Website (10+ pages)", available: true },
        { name: "Complete Brand Identity", available: true },
        { name: "E-commerce Store Setup", available: true },
        { name: "Digital Marketing Strategy", available: true },
        { name: "Custom Mobile App", available: false },
        { name: "Video Animation Production", available: false }
      ]
    },
    {
      slug: "elite-website",
      name: "Complete Solution",
      subtitle: "Enterprise",
      price: "$249999",
      period: "/project",
      features: [
        { name: "Full Website + Mobile App", available: true },
        { name: "Complete Brand Ecosystem", available: true },
        { name: "Advanced E-commerce Platform", available: true },
        { name: "Professional Animation & Video", available: true },
        { name: "Comprehensive Digital Marketing", available: true },
        { name: "24/7 Support & Maintenance", available: true }
      ]
    }
  ];

  const features = [
    { icon: "✓", title: "Quality Checked", description: "Professional quality assurance" },
    { icon: "⚡", title: "Quick Turnaround Time", description: "Fast delivery guaranteed" },
    { icon: "💰", title: "Value For Money", description: "Best pricing in market" },
    { icon: "🏆", title: "Award Winning Team", description: "Experienced professionals" }
  ];

  const processSteps = [
    { number: 1, title: "Project Brief", description: "Initial consultation and requirements gathering" },
    { number: 2, title: "First Concept", description: "Initial design concepts and wireframes" },
    { number: 3, title: "Feedback/Revisions", description: "Client feedback and design refinements" },
    { number: 4, title: "Final Delivery", description: "Project completion and handover" }
  ];

  const pkg = servicePackages.find((p) => p.slug === slug);

  if (!pkg) {
    return (
      <div className={styles.container2}>
        <h1>Package Not Found</h1>
        <p>No package found for slug: <b>{slug}</b></p>
      </div>
    );
  }

  return (
    <ClientLayout>
      <div className={styles.container2}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBadge} style={{ marginTop: "3rem" }}>Pricing Plans</div>
          <div className={styles.creativeBrief}>
            <h3>{pkg.slug.toUpperCase()}</h3>
            <p className={styles.heroDescription}>{pkg.subtitle}</p>
          </div>
          <h1 className={styles.heroTitle} style={{ marginTop: "3rem" }}>{pkg.name}</h1>
        </section>

        {/* Agency Section */}
        <section className={styles.agency}>
          <div className={styles.agencyContainer}>
            <div className={styles.agencyContent}>
              <h2>A Creative Digital Agency You Can Count On!</h2>
              <p>A creative digital agency can offer a wide range of services for brand and development solutions for existing and emerging brands. Whether you're in start-up or we start a established business.</p>
              <div className='btn-wrapper'>
                <button className="te-theme-btn">Let's Get Started</button>
              </div>
              <div className='btn-wrapper'>
                <button className="te-theme-btn">Let's Discuss</button>
              </div>
            </div>
            <div className={styles.agencyFeatures}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Begin?<br />Select This Package</h2>
            <p>Don't miss out - secure this package and begin your digital transformation.</p>
            <div className="single-field">
              <button className="te-theme-btn blue-btn"> Select Package</button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.process}>
          <h2>How It Works?</h2>
          <p className={styles.processDescription}>We follow streamlined our processes to achieve a swift, stress-free development and impactful results in the most effective manner. We take you on a step by step creative journey to 100% satisfaction for our clients.</p>

          <div className={styles.processSteps}>
            {processSteps.map((step) => (
              <div key={step.number} className={styles.processStep}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.creativeBrief}>
            <h3>Creative Brief</h3>
            <p>You will provide us a brief but creative brief what your business is about and what you want to be designed for your brand. We brief will provide the initial information needed for the logo design.</p>
          </div>
        </section>

        {/* CTA Section 2 */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Make Your First Move<br />Share Your Idea With Us</h2>
            <p>Contact our experts NOW to begin crafting your project.</p>
            <div className="single-field">
              <button className="te-theme-btn blue-btn">💬 Request A Quote</button>
            </div>
            <p className={styles.contactInfo}>📞 Contact Number: +1 (555) 564-8360 | 💬 Start Live Chat</p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <div className={styles.testimonialsContainer}>
            <h2>Client's Love Towards Nexus Digitals</h2>
            <p>See what our clients have to say about our service and experience with Nexus Digitals. Their words of appreciation really make a difference to us. Let's take a look.</p>

            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>"We are grateful for Nexus Digitals competence and help through the clout. I highly recommend Nexus Digitals for all design solutions & digital marketing needs."</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>JS</div>
                <div className={styles.authorInfo}>
                  <h5>Johnathan Smith</h5>
                  <p>CEO, Tech Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ClientLayout>
  );
}
