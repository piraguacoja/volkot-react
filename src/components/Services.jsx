import { Cloud, GitMerge, Container, ShieldCheck, Database, BrainCircuit } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    num: '01',
    icon: Cloud,
    name: 'Cloud Architecture',
    desc: 'Design and implement scalable, secure cloud infrastructure on Azure, AWS, and GCP. From greenfield builds to enterprise migrations.',
    tags: ['Azure', 'AWS', 'GCP', 'Landing Zones'],
    repo: 'https://github.com/volkotlabs',
  },
  {
    num: '02',
    icon: GitMerge,
    name: 'DevOps & Automation',
    desc: 'End-to-end CI/CD pipelines, GitOps workflows, and infrastructure automation that eliminate toil and accelerate delivery.',
    tags: ['Terraform', 'GitHub Actions', 'Azure DevOps', 'ArgoCD'],
    repo: 'https://github.com/volkotlabs',
  },
  {
    num: '03',
    icon: Container,
    name: 'Kubernetes & Containers',
    desc: 'Production-grade container platforms with autoscaling, observability, and zero-downtime deployments. AKS, EKS, GKE.',
    tags: ['Kubernetes', 'Helm', 'Docker', 'Istio'],
    repo: 'https://github.com/volkotlabs',
  },
  {
    num: '04',
    icon: ShieldCheck,
    name: 'Security & Compliance',
    desc: 'Zero-Trust architectures, cloud security posture management, and compliance frameworks for regulated industries.',
    tags: ['Zero-Trust', 'CSPM', 'GxP', 'GDPR'],
    repo: 'https://github.com/volkotlabs',
  },
  {
    num: '05',
    icon: Database,
    name: 'Data Platforms',
    desc: 'Modern data architectures with Databricks, Azure Data Factory, and Unity Catalog. From ingestion to governance.',
    tags: ['Databricks', 'ADF', 'Delta Lake', 'dbt'],
    repo: 'https://github.com/volkotlabs',
  },
  {
    num: '06',
    icon: BrainCircuit,
    name: 'AI/ML Infrastructure',
    desc: 'Cloud-native ML pipelines, model serving infrastructure, and GPU-accelerated workloads on Vertex AI and Azure ML.',
    tags: ['Vertex AI', 'Azure ML', 'MLflow', 'NVIDIA'],
    repo: 'https://github.com/volkotlabs',
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className="service-card reveal">
      <div className="service-card-header">
        <div className="service-icon-wrap">
          <Icon size={22} strokeWidth={1.5} />
        </div>
        <div className="service-card-actions">
          <span className="service-num">{service.num}</span>
          <a
            href={service.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="service-github-btn"
            aria-label="View on GitHub"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
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
