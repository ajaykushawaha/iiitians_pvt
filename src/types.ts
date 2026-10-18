export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
}

export interface TechnologyItem {
  name: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'Cloud';
  icon: string;
  description: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
