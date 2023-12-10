import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProjectLinksProps {
  icon?: React.ReactNode;
  text: string;
  link: string;
}

const ProjectLinks = ({ icon, text, link }: ProjectLinksProps) => {
  return (
    <Link href={link} target="_blank">
      <Button>
        {icon} <span className="ml-2">{text}</span>
      </Button>
    </Link>
  );
};

export default ProjectLinks;
