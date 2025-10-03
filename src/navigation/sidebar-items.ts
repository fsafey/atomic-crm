import {
  Home,
  Users,
  Building2,
  Briefcase,
  BarChart3,
  Settings,
  FileText,
} from 'lucide-react';

export type NavMainItem = {
  title: string;
  url: string;
  icon?: any;
  comingSoon?: boolean;
  newTab?: boolean;
  subItems?: NavMainItem[];
};

export type NavGroup = {
  id: string;
  label?: string;
  items: NavMainItem[];
};

export const sidebarItems: NavGroup[] = [
  {
    id: 'main',
    label: 'Main',
    items: [
      {
        title: 'Dashboard',
        url: '/',
        icon: Home,
      },
      {
        title: 'Contacts',
        url: '/contacts',
        icon: Users,
      },
      {
        title: 'Companies',
        url: '/companies',
        icon: Building2,
      },
      {
        title: 'Deals',
        url: '/deals',
        icon: Briefcase,
      },
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    items: [
      {
        title: 'Reports',
        url: '/reports',
        icon: BarChart3,
        subItems: [
          {
            title: 'Revenue',
            url: '/reports/revenue',
            icon: FileText,
            comingSoon: true,
          },
          {
            title: 'Pipeline',
            url: '/reports/pipeline',
            icon: FileText,
            comingSoon: true,
          },
        ],
      },
    ],
  },
  {
    id: 'settings',
    items: [
      {
        title: 'Settings',
        url: '/settings',
        icon: Settings,
      },
    ],
  },
];
