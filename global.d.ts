// Temporary module declarations to satisfy TypeScript until dependencies are installed
// This file prevents "Cannot find module" errors when node_modules are missing.

declare module "next/image" {
  import type { ComponentProps } from 'react';
  const Image: React.ComponentType<ComponentProps<'img'>>;
  export default Image;
}

declare module "next/link" {
  import type { ComponentProps, ReactNode } from 'react';
  interface LinkProps extends ComponentProps<'a'> {
    href: string;
    as?: string;
    prefetch?: boolean;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    onClick?: () => void;
    children?: ReactNode;
  }
  const Link: React.ComponentType<LinkProps>;
  export default Link;
}

declare module "next/navigation" {
  export function notFound(): void;
  export function redirect(url: string): void;
  export function useRouter(): any;
}

declare module "react-icons/fa" {
  import type { ComponentType, SVGProps } from 'react';
  export const FaArrowLeft: ComponentType<SVGProps<SVGSVGElement>>;
  export const FaCalendar: ComponentType<SVGProps<SVGSVGElement>>;
  export const FaUser: ComponentType<SVGProps<SVGSVGElement>>;
  export const FaClock: ComponentType<SVGProps<SVGSVGElement>>;
}
