export interface LayoutProps {
   children: React.ReactNode;
   addClasses?: string;
}

export type ButtonProps = {
   onClick?: () => void;
   disabled?: boolean;
   label: string;
   addClasses?: string;
}