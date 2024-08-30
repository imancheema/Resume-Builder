import React, { FC, SetStateAction, useState } from "react";
import "./ResumeSections.css";

type ProjectsFormType = {
  projectType: string,
  name: string,
  description:string,
  startDate:string,
  endDate:string
}

interface ProjectsProps {
  nextView: () => void;
  prevView: () => void;
  formData: ProjectsFormType;
  setFormData: React.Dispatch<SetStateAction<ProjectsFormType>>
}

const Projects: FC<ProjectsProps> = ({ nextView, prevView, formData, setFormData }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="projects-form-container">
      <h2 className="projects-form-heading">
      <select
            value={formData.projectType}
            onChange={(e) => setFormData((prev) => ({
              ...prev, projectType: e.target.value
              }))}
            className="projects-form-control"
          >
            <option value="">Select a Header</option>
            <option value="PROJECTS">Projects</option>
            <option value="VOLUNTEERING">Volunteering</option>
            <option value="WORK">Work</option>
            <option value="CLUBS">Clubs</option>
          </select>
      </h2>
      <button type="button" className="btn btn-ai">
        Generate from AI
      </button>

      <form>
        <div className="projects-form-group">
          <label className="projects-form-label">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({
              ...prev, name: e.target.value
              }))} 
            className="projects-form-control"
            required
          />
        </div>

        <div className="projects-form-group">
          <label className="projects-form-label">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData((prev) => ({
              ...prev, description: e.target.value
              }))} 
            className="projects-form-control"
            rows={4}
            required
          />
        </div>

        <div className="projects-form-group">
          <label className="projects-form-label">Start Date</label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) => setFormData((prev) => ({
              ...prev, startDate: e.target.value
              }))} 
            className="projects-form-control"
            required
          />
        </div>

        <div className="projects-form-group">
          <label className="projects-form-label">End Date</label>
          <input
            type="date"
            value={formData.endDate}
            onChange={(e) => setFormData((prev) => ({
              ...prev, endDate: e.target.value
              }))} 
            className="projects-form-control"
            required
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn btn-submit">
            Submit
          </button>
        </div>
      </form>

      <div className="form-buttons">
        <button type="button" onClick={prevView} className="btn btn-back">
          Back
        </button>
        <button type="button" onClick={nextView} className="btn btn-next">
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
