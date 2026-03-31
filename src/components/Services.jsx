import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    num: '01',
    icon: '☁️',
    name: 'Cloud Architecture',
    desc: 'Design and implement scalable, secure cloud infrastructure on Azure, AWS, and GCP. From greenfield builds to enterprise migrations.',
    tags: ['Azure', 'AWS', 'GCP', 'Landing Zones'],
  },
  {
    num: '02',
    icon: '⚙️',
    name: 'DevOps & Automation',
    desc: 'End-to-end CI/CD pipelines, GitOps workflows, and infrastructure automation that eliminate toil and accelerate delivery.',
    tags: ['Terraform', 'GitHub Actions', 'Azure DevOps', 'ArgoCD'],
  },
  {
    num: '03',
    icon: '🐳',
    name: 'Kubernetes & Containers',
    desc: 'Production-grade container platforms with autoscaling, observability, and zero-downtime deployments. AKS, EKS, GKE.',
    tags: ['Kubernetes', 'Helm', 'Docker', 'Istio'],
  },
  {
    num: '04',
    icon: '🔒',
    name: 'Security & Compliance',
    desc: 'Zero-Trust architectures, cloud security posture management, and compliance frameworks for regulated industries.',
    tags: ['Zero-Trust', 'CSPM', 'GxP', 'GDPR'],
  },
  {
    num: '05',
    icon: '📊',
    name: 'Data Platforms',
    desc: 'Modern data architectures with Databricks, Azure Data Factory, and Unity Catalog. From ingestion to governance.',
    tags: ['Databricks', 'ADF', 'Delta Lake', 'dbt'],
  },
  {
    num: '06',
    icon: '🤖',
    name: 'AI/ML Infrastructure',
    desc: 'Cloud-native ML pipelines, model serving infrastructure, and GPU-accelerated workloads on Vertex AI and Azure ML.',
    tags: ['Vertex AI', 'Azure ML', 'MLflow', 'NVIDIA'],
  },
];

function ServiceCard({ service }) {
  return (
    <div className="service-card reveal">
      <div className="service-card-header">
        <span className="service-icon">{service.icon}</span>
        <span className="service-num">{service.num}</span>
      </div>
      <div className="service-name">
        {service.name}
        <span className="service-name-cursor" />
      </div>
      <p className="service-desc">{service.desc}</p>
      <div className="service-tags">
        {service.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const headerRef = useScrollReveal();

  return (
    <section id="services">
      <div className="section-header reveal" ref={headerRef}>
        <span className="section-num">01</span>
        <h2 className="section-title">Services</h2>
        <div className="section-line"></div>
      </div>
      <div className="services-grid">
        {services.map(s => <ServiceCard key={s.num} service={s} />)}
      </div>
    </section>
  );
}
