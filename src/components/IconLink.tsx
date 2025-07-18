// src/components/IconLink.tsx
import React from "react";
import {
  Calculator,
  FileText,
  FileCheck2,
} from "lucide-react"; // Import only the icons you need

interface IconLinkProps {
  text: string;
  href?: string;
  icon?: "calculator" | "tds" | "msds";
}

// Map icon string to component
const iconMap = {
  calculator: Calculator,
  tds: FileText,
  msds: FileCheck2,
};

const IconLink: React.FC<IconLinkProps> = ({ text, href = "#", icon }) => {
  const Icon = icon ? iconMap[icon] : null;

  return (
    <a
      href={href}
      className="flex items-center gap-2 text-[#3E931C] hover:underline text-lg font-medium mb-2"
    >
      {Icon && <Icon className="w-4 h-4" />}
      {text}
    </a>
  );
};

export default IconLink;
