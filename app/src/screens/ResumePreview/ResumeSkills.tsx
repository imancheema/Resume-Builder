import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResumePreview.css";

const ResumeSkills: FC = () => {
  return (
    <div className="resume-section">
      <h3 className="section-heading"> SKILLS </h3>
      <p className="section-content"> These are my skills </p>
    </div>
    
  );
};

export default ResumeSkills;