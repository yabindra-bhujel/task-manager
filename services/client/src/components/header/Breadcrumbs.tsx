import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  crumbs: { label: string; to: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbProps> = ({ crumbs }) => {
  return (
      <nav className="text-sm text-gray-700">
        {crumbs.map((crumb, index) => (
          <span key={index}>
            <Link to={crumb.to} className="text-blue-600 hover:text-blue-800">
              {crumb.label}
            </Link>
            {index < crumbs.length - 1 && " > "}
          </span>
        ))}
      </nav>
  );
};
