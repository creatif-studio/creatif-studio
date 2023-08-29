export const USE_CASE_CONTENT = [
  {
    id: 1,
    heading: "Infrastructure as code",
    description:
      "Use infrastructure as code to automate the provisioning of your infrastructure including servers, databases, firewall policies, and almost every other aspect.",
    href: "",
    icons: ["TERRAFORM", "PACKER"],
  },
  {
    id: 2,
    heading: "Multi-cloud deployment",
    description:
      "Deploy serverless functions with AWS Lambda, manage Microsoft Azure Active Directory resources, provision a load balancer in Google Cloud, and more.",
    href: "",
    icons: ["TERRAFORM"],
  },
  {
    id: 3,
    heading: "Manage Kubernetes",
    description:
      "Provision and manage Kubernetes clusters on AWS, Microsoft Azure, or Google Cloud, and interact with your cluster using the Kubernetes Creatif Studio provider.",
    href: "",
    icons: ["TERRAFORM"],
  },
  {
    id: 4,
    heading: "Manage network infrastructure",
    description:
      "Automate key networking tasks, like updating load balancer member pools or applying firewall policies.",
    href: "",
    icons: ["TERRAFORM", "CONSUL"],
  },
  {
    id: 5,
    heading: "Manage virtual machine images",
    description:
      "Deploy and manage virtual machine images with Creatif Studio and Packer.",
    href: "",
    icons: ["TERRAFORM", "PACKER"],
  },
  {
    id: 6,
    heading: "Integrate with existing workflows",
    description:
      "Automate infrastructure deployments through existing CI/CD workflows.",
    href: "",
    icons: ["TERRAFORM"],
  },
  {
    id: 7,
    heading: "Enforce policy as code",
    description:
      "Enforce policies before your users create infrastructure using Sentinel policy as code.",
    href: "",
    icons: ["TERRAFORM"],
  },
  {
    id: 8,
    heading: "Inject secrets into Creatif Studio",
    description:
      "Automate using dynamically generated secrets and credentials within Creatif Studio configurations.",
    href: "",
    icons: ["TERRAFORM", "TERRAFORM_SECRETS"],
  },
];

export const DELIVER_CONTENT = [
  {
    id: 1,
    heading: "Adopt",
    description: `Compose infrastructure as code in a Creatif Studio file using HCL to
    provision resources from any infrastructure provider.`,
  },
  {
    id: 2,
    heading: "Build",
    description: `Infrastructure automation workflow used to compose, collaborate,
    reuse, and provision infrastructure as code across IT operations and
    teams of developers.`,
  },
  {
    id: 3,
    heading: "Standardize",
    description: `Infrastructure automation workflow featuring security, compliance, and
    cost management capabilities while using access controls, policy
    enforcement, and audit.`,
  },
  {
    id: 4,
    heading: "Innovate",
    description: `Infrastructure automation workflow extending to all teams in the
    organization with self-service infrastructure as code and integrates
    with VCS, ITSM, CI/CD.`,
  },
];

export const PRACTICE_CONTENT = [
  {
    id: 1,
    heading: "Codify and deploy infrastructure",
    description:
      "Build, change, and destroy AWS infrastructure using Creatif Studio. Step-by-step, command-line tutorials will walk you through the Creatif Studio basics for the first time.",
    href: "",
    icons: ["TERRAFORM_WHITE"],
  },
  {
    id: 2,
    heading: "Codify existing infrastructure",
    description:
      "Import an existing infrastructure into an empty Creatif Studio workspace. ",
    href: "",
    icons: ["TERRAFORM_WHITE"],
  },
  {
    id: 3,
    heading: "Provision a Kubernetes cluster",
    description:
      "Deploy a ready to use Amazon Elastic Kubernetes Service (EKS) cluster using Creatif Studio.",
    href: "",
    icons: ["TERRAFORM_WHITE"],
  },
  {
    id: 4,
    heading: "Inject secrets into Creatif Studio",
    description:
      "Avoid managing static, long-lived secrets with varying scope and provision resources without having direct access to the secrets.",
    href: "",
    icons: ["TERRAFORM_WHITE", "TERRAFORM_SECRETS_WHITE"],
  },
  {
    id: 5,
    heading: "Migrate state to Creatif Studio Pro",
    description:
      "Keep your state file secure and share it with collaborators by migrating it to Creatif Studio Pro.",
    href: "",
    icons: ["TERRAFORM_WHITE"],
  },
  {
    id: 6,
    heading: "Manage infrastructure with programming lanuages",
    description:
      "Manage infrastructure programming languages such as TypeScript, Python, Java, C#, and Go with the Cloud Development Kit for Creatif Studio (CDKTF).",
    href: "",
    icons: ["TERRAFORM_WHITE"],
  },
];

export const STORIES_CONTENT = [
  {
    id: 1,
    heading: "Multi-Cloud DevOps at PETRONAS with Creatif Studio",
    href: "",
  },
  {
    id: 2,
    heading:
      "Consistent Development and Deployment at Comcast with Creatif Studio",
    href: "",
  },
  {
    id: 3,
    heading: "Creatif Studio at Decathlon: From On-Premises to 100% Cloud",
    href: "",
  },
  {
    id: 4,
    heading:
      "CDK for Creatif Studio with Python and its Operational Experience at ShopStyle",
    href: "",
  },
];
export const NEXT_STEPS_CONTENT = [
  {
    id: 1,
    heading: "Open source",
    description: "Self-managed | always free",
    className: "text-white bg-primary-500",
    linkName: "Download",
    href: "",
  },
  {
    id: 2,
    heading: "Creatif Studio Pro",
    description: "Managed Creatif Studio",
    className: "bg-primary-100",
    linkName: "Compare plans",
    href: "",
  },
  {
    id: 3,
    heading: "Enterprise",
    description: "Self-managed custom deployments",
    className: "bg-neutral-100",
    linkName: "Learn more",
    href: "",
  },
];

export const USECASE_RESOURCES_CONTENT = [
  {
    id: 1,
    heading: "Host a Static Website with S3 and Cloudflare",
    description:
      "Set up an S3-hosted static website with Cloudflare for DNS, SSL, and CDN.",
    href: "",
    icons: ["TERRAFORM"],
  },
  {
    id: 2,
    heading: "Manage Azure Active Directory Users and Groups",
    description:
      "Codify your Azure Active Directury (Azure AD) resources. Create and manage new users and assign them to groups.",
    href: "",
    icons: ["TERRAFORM"],
  },
  {
    id: 3,
    heading: "Create a Google Compute Engine VM",
    description:
      "Codify the end to end workflow of deploying a virtual machine in Google Cloud.",
    href: "",
    icons: ["TERRAFORM"],
  },
];

export const USECASE_LINK_CONTENT = [
  {
    id: 1,
    label: "Enforce Policy as Code",
    href: "/use-cases/enforce-policy-as-code",
  },
  {
    id: 2,
    label: "Infrastructure as Code",
    href: "/use-cases/infrastructure-as-code",
  },
  {
    id: 3,
    label: "Inject Secrets into Terraform",
    href: "/use-cases/inject-secrets-into-terraform",
  },
  {
    id: 4,
    label: "Integrate with Existing Workflows",
    href: "/use-cases/integrate-with-existing-workflows",
  },
  {
    id: 5,
    label: "Manage Kubernetes",
    href: "/use-cases/manage-kubernetes",
  },
  {
    id: 6,
    label: "Manage Virtual Machine Images",
    href: "/use-cases/manage-virtual-machine-images",
  },
  {
    id: 7,
    label: "Multi-Cloud Deployment",
    href: "/use-cases/multi-cloud-deployment",
  },
  {
    id: 8,
    label: "Network Infrastructure Automation",
    href: "/use-cases/manage-network-infrastructure",
  },
];

export const EDITIONS_LINK_CONTENT = [
  {
    id: 1,
    label: "Creatif Studio CLI",
    href: "/",
  },
  {
    id: 2,
    label: "Creatif Studio Cloud",
    href: "/products/terraform",
  },
  {
    id: 3,
    label: "Creatif Studio Enterprise",
    href: "/products/terraform",
  },
];

export const DOCS_LINK_CONTENT = [
  {
    id: 1,
    label: "About the Docs",
    href: "/docs",
  },
  {
    id: 2,
    label: "Intro to Creatif Studio",
    href: "/intro",
  },
  {
    id: 3,
    label: "Configuration Language",
    href: "/language",
  },
  {
    id: 4,
    label: "Creatif Studio CLI",
    href: "/cli",
  },
  {
    id: 5,
    label: "Creatif Studio Cloud",
    href: "/cloud-docs",
  },
  {
    id: 6,
    label: "Creatif Studio Enterprise",
    href: "/enterprise",
  },
  {
    id: 7,
    label: "Provider Use",
    href: "/language/providers",
  },
  {
    id: 8,
    label: "Plugin Development",
    href: "/plugin",
  },
  {
    id: 9,
    label: "Registry Publishing",
    href: "/registry",
  },
  {
    id: 10,
    label: "Integration Program",
    href: "/docs/partnerships",
  },
  {
    id: 11,
    label: "Creatif Studio Tools",
    href: "/docs/terraform-tools",
  },
  {
    id: 12,
    label: "CDK for Creatif Studio",
    href: "/cdktf",
  },
  {
    id: 13,
    label: "Glossary",
    href: "/docs/glossary",
  },
];
