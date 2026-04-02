import {
  SiTerraform, SiGithubactions, SiJenkins,
  SiKubernetes, SiHelm, SiDocker, SiIstio,
  SiDatabricks, SiMlflow, SiNvidia,
  SiGooglecloud, SiGithub,
  SiFortinet, SiPaloaltonetworks, SiCloudflare, SiSnyk,
  SiApachespark, SiLooker, SiGooglebigquery,
  SiReact, SiNodedotjs, SiPython, SiFastapi, SiFirebase,
} from '@icons-pack/react-simple-icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

function PowerBIIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-label="Power BI">
      <path d="M4 20h2V9H4v11zm4 0h2V4H8v16zm4 0h2v-8h-2v8zm4 0h2v-5h-2v5z"/>
    </svg>
  );
}

function AzureIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-label="Azure">
      <path d="M13.05 4.24L6.56 18.05l-4.49.01 5.32-9.21-3.35-4.61zm.78-.84h5.9L13.12 19.6l-4.8-.02z" />
    </svg>
  );
}

function AwsIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-label="AWS">
      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.030-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.503 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.778.778 0 0 0-.215-.559c-.144-.151-.415-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.224-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.07.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.112-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.026-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607z" />
    </svg>
  );
}

const services = [
  {
    num: '01',
    name: 'Cloud Architecture',
    icons: [
      { component: AzureIcon, label: 'Azure', color: '#0078D4' },
      { component: AwsIcon, label: 'AWS', color: '#FF9900' },
      { component: SiGooglecloud, label: 'GCP', color: '#4285F4' },
    ],
    desc: 'Design and implement scalable, secure cloud infrastructure on Azure, AWS, and GCP. From greenfield builds to enterprise migrations.',
    repo: 'https://github.com/volkotlabs',
  },
  {
    num: '02',
    name: 'DevOps & Automation',
    icons: [
      { component: SiTerraform, label: 'Terraform', color: '#7B42BC' },
      { component: SiGithubactions, label: 'GitHub Actions', color: '#2088FF' },
      { component: AzureIcon, label: 'Azure DevOps', color: '#0078D4' },
      { component: SiJenkins, label: 'Jenkins', color: '#D24939' },
    ],
    desc: 'End-to-end CI/CD pipelines, GitOps workflows, and infrastructure automation that eliminate toil and accelerate delivery.',
    repo: 'https://github.com/volkotlabs',
  },
  {
    num: '03',
    name: 'Kubernetes & Containers',
    icons: [
      { component: SiKubernetes, label: 'Kubernetes', color: '#326CE5' },
      { component: SiHelm, label: 'Helm', color: '#0F1689' },
      { component: SiDocker, label: 'Docker', color: '#2496ED' },
      { component: SiIstio, label: 'Istio', color: '#466BB0' },
    ],
    desc: 'Production-grade container platforms with autoscaling, observability, and zero-downtime deployments. AKS, EKS, GKE.',
    repo: 'https://github.com/volkotlabs',
  },
  {
    num: '04',
    name: 'Security & Compliance',
    icons: [
      { component: SiFortinet, label: 'Fortinet', color: '#EE3124' },
      { component: SiPaloaltonetworks, label: 'Palo Alto', color: '#F36E21' },
      { component: SiCloudflare, label: 'Cloudflare', color: '#F38020' },
      { component: SiSnyk, label: 'Snyk', color: '#4C4A73' },
    ],
    desc: 'Zero-Trust architectures, cloud security posture management, and compliance frameworks for regulated industries.',
    repo: 'https://github.com/volkotlabs',
  },
  {
    num: '05',
    name: 'Data Platforms & Analytics',
    icons: [
      { component: SiDatabricks, label: 'Databricks', color: '#FF3621' },
      { component: SiApachespark, label: 'Spark', color: '#E25A1C' },
      { component: PowerBIIcon, label: 'Power BI', color: '#F2C811' },
      { component: SiLooker, label: 'Looker', color: '#4285F4' },
      { component: SiGooglebigquery, label: 'BigQuery', color: '#4285F4' },
      { component: AzureIcon, label: 'Azure', color: '#0078D4' },
    ],
    desc: 'Modern data architectures with Databricks, Azure Data Factory, and Unity Catalog — from raw ingestion to governed analytics and business intelligence dashboards.',
    repo: 'https://github.com/volkotlabs',
  },
  {
    num: '06',
    name: 'AI / ML Infrastructure',
    icons: [
      { component: SiGooglecloud, label: 'Vertex AI', color: '#4285F4' },
      { component: AzureIcon, label: 'Azure ML', color: '#0078D4' },
      { component: SiMlflow, label: 'MLflow', color: '#0194E2' },
      { component: SiNvidia, label: 'NVIDIA', color: '#76B900' },
    ],
    desc: 'Cloud-native ML pipelines, model serving infrastructure, and GPU-accelerated workloads on Vertex AI and Azure ML.',
    repo: 'https://github.com/volkotlabs',
  },
  {
    num: '07',
    name: 'Custom Software & Tooling',
    icons: [
      { component: SiReact, label: 'React', color: '#61DAFB' },
      { component: SiNodedotjs, label: 'Node.js', color: '#339933' },
      { component: SiPython, label: 'Python', color: '#3776AB' },
      { component: SiFastapi, label: 'FastAPI', color: '#009688' },
      { component: SiFirebase, label: 'Firebase', color: '#FFCA28' },
      { component: SiGooglecloud, label: 'GCP', color: '#4285F4' },
    ],
    desc: 'Purpose-built software for teams tired of forcing their workflows into tools that almost fit. Internal platforms, developer tools, automation scripts, REST APIs, and lightweight web apps — designed around your actual needs, not a generic template.',
    repo: 'https://github.com/volkotlabs',
  },
];

function ServiceCard({ service }) {
  return (
    <div className="service-card reveal">
      <div className="service-card-header">
        <div className="service-card-actions">
          <span className="service-num">{service.num}</span>
          <a
            href={service.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="service-github-btn"
            aria-label="View on GitHub"
          >
            <SiGithub size={14} />
          </a>
        </div>
      </div>
      <div className="service-name">
        {service.name}
        <span className="service-name-cursor" />
      </div>
      <p className="service-desc">{service.desc}</p>
      <div className="service-brand-icons">
        {service.icons.map((icon) => (
          <div key={icon.label} className="service-brand-chip" title={icon.label}>
            <icon.component size={16} style={{ color: icon.color }} />
            <span>{icon.label}</span>
          </div>
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
        {services.slice(0, 6).map(s => <ServiceCard key={s.num} service={s} />)}
      </div>
      <div className="services-grid services-grid--centered">
        <ServiceCard service={services[6]} />
      </div>
    </section>
  );
}
