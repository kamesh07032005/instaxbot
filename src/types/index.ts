export interface NavLink {
  href: string;
  label: string;
}

export interface Feature {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
  stats: string;
  color: string;
}

export interface UseCase {
  title: string;
  description: string;
  stats: string;
}

export interface Bubble {
  size: number;
  x: number;
  y: number;
  duration: number;
}
