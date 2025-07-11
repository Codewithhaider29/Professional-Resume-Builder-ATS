import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Plus, Trash2 } from 'lucide-react';

export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    website: string;
    address: string;
  };
  summary: string;
  skills: string[];
  experience: {
    id: string;
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    responsibilities: string;
  }[];
  education: {
    id: string;
    degree: string;
    institution: string;
    year: string;
  }[];
  certifications: {
    id: string;
    name: string;
    organization: string;
    date: string;
  }[];
  projects: {
    id: string;
    title: string;
    description: string;
    technologies: string;
    link: string;
  }[];
}

interface ResumeFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ data, onChange }) => {
  const [skillInput, setSkillInput] = useState('');

  const updatePersonalInfo = (field: string, value: string) => {
    onChange({
      ...data,
      personalInfo: { ...data.personalInfo, [field]: value }
    });
  };

  const updateSummary = (value: string) => {
    onChange({ ...data, summary: value });
  };

  const addSkill = () => {
    if (skillInput.trim()) {
      onChange({
        ...data,
        skills: [...data.skills, skillInput.trim()]
      });
      setSkillInput('');
    }
  };

  const removeSkill = (index: number) => {
    onChange({
      ...data,
      skills: data.skills.filter((_, i) => i !== index)
    });
  };

  const addExperience = () => {
    onChange({
      ...data,
      experience: [
        ...data.experience,
        {
          id: Date.now().toString(),
          title: '',
          company: '',
          startDate: '',
          endDate: '',
          responsibilities: ''
        }
      ]
    });
  };

  const updateExperience = (id: string, field: string, value: string) => {
    onChange({
      ...data,
      experience: data.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    });
  };

  const removeExperience = (id: string) => {
    onChange({
      ...data,
      experience: data.experience.filter(exp => exp.id !== id)
    });
  };

  const addEducation = () => {
    onChange({
      ...data,
      education: [
        ...data.education,
        {
          id: Date.now().toString(),
          degree: '',
          institution: '',
          year: ''
        }
      ]
    });
  };

  const updateEducation = (id: string, field: string, value: string) => {
    onChange({
      ...data,
      education: data.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    });
  };

  const removeEducation = (id: string) => {
    onChange({
      ...data,
      education: data.education.filter(edu => edu.id !== id)
    });
  };

  const addCertification = () => {
    onChange({
      ...data,
      certifications: [
        ...data.certifications,
        {
          id: Date.now().toString(),
          name: '',
          organization: '',
          date: ''
        }
      ]
    });
  };

  const updateCertification = (id: string, field: string, value: string) => {
    onChange({
      ...data,
      certifications: data.certifications.map(cert =>
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    });
  };

  const removeCertification = (id: string) => {
    onChange({
      ...data,
      certifications: data.certifications.filter(cert => cert.id !== id)
    });
  };

  const addProject = () => {
    onChange({
      ...data,
      projects: [
        ...data.projects,
        {
          id: Date.now().toString(),
          title: '',
          description: '',
          technologies: '',
          link: ''
        }
      ]
    });
  };

  const updateProject = (id: string, field: string, value: string) => {
    onChange({
      ...data,
      projects: data.projects.map(proj =>
        proj.id === id ? { ...proj, [field]: value } : proj
      )
    });
  };

  const removeProject = (id: string) => {
    onChange({
      ...data,
      projects: data.projects.filter(proj => proj.id !== id)
    });
  };

  return (
    <div className="space-y-6">
      {/* Personal Information */}
      <Card className="bg-gradient-card border-white/20 shadow-elegant hover:shadow-hover transition-smooth">
        <CardHeader className="border-b border-muted/20 pb-4">
          <CardTitle className="text-foreground text-xl flex items-center gap-3">
            <div className="w-1 h-6 bg-foreground rounded-full"></div>
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={data.personalInfo.fullName}
                onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={data.personalInfo.email}
                onChange={(e) => updatePersonalInfo('email', e.target.value)}
                placeholder="john@example.com"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={data.personalInfo.phone}
                onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input
                id="linkedin"
                value={data.personalInfo.linkedin}
                onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                placeholder="linkedin.com/in/johndoe"
              />
            </div>
            <div>
              <Label htmlFor="github">GitHub Profile</Label>
              <Input
                id="github"
                value={data.personalInfo.github}
                onChange={(e) => updatePersonalInfo('github', e.target.value)}
                placeholder="github.com/johndoe"
              />
            </div>
            <div>
              <Label htmlFor="website">Website/Portfolio</Label>
              <Input
                id="website"
                value={data.personalInfo.website}
                onChange={(e) => updatePersonalInfo('website', e.target.value)}
                placeholder="johndoe.com"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={data.personalInfo.address}
              onChange={(e) => updatePersonalInfo('address', e.target.value)}
              placeholder="City, State, Country"
            />
          </div>
        </CardContent>
      </Card>

      {/* Professional Summary */}
      <Card className="bg-gradient-card border-white/20 shadow-elegant hover:shadow-hover transition-smooth">
        <CardHeader className="border-b border-muted/20 pb-4">
          <CardTitle className="text-foreground text-xl flex items-center gap-3">
            <div className="w-1 h-6 bg-foreground rounded-full"></div>
            Professional Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <Label htmlFor="summary" className="text-base font-medium">Summary (3-4 lines)</Label>
          <Textarea
            id="summary"
            value={data.summary}
            onChange={(e) => updateSummary(e.target.value)}
            placeholder="A brief professional summary highlighting your key skills and experience..."
            rows={4}
            className="mt-2"
          />
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="bg-gradient-card border-white/20 shadow-elegant hover:shadow-hover transition-smooth">
        <CardHeader className="border-b border-muted/20 pb-4">
          <CardTitle className="text-foreground text-xl flex items-center gap-3">
            <div className="w-1 h-6 bg-foreground rounded-full"></div>
            Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="flex gap-2">
            <Input
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              placeholder="Add a skill"
              onKeyPress={(e) => e.key === 'Enter' && addSkill()}
            />
            <Button onClick={addSkill} size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-accent text-accent-foreground px-3 py-1 rounded-md text-sm flex items-center gap-2"
              >
                {skill}
                <button
                  onClick={() => removeSkill(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Work Experience */}
      <Card className="bg-gradient-card border-white/20 shadow-elegant hover:shadow-hover transition-smooth">
        <CardHeader className="border-b border-muted/20 pb-4 flex flex-row items-center justify-between">
          <CardTitle className="text-foreground text-xl flex items-center gap-3">
            <div className="w-1 h-6 bg-foreground rounded-full"></div>
            Work Experience
          </CardTitle>
          <Button onClick={addExperience} size="sm" className="bg-foreground text-background hover:bg-foreground/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Experience
          </Button>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          {data.experience.map((exp, index) => (
            <div key={exp.id} className="space-y-4 border-b border-section-border pb-4 last:border-b-0">
              <div className="flex justify-between items-start">
                <h4 className="font-medium">Experience {index + 1}</h4>
                <Button
                  onClick={() => removeExperience(exp.id)}
                  variant="destructive"
                  size="sm"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Job Title *</Label>
                  <Input
                    value={exp.title}
                    onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
                    placeholder="Software Engineer"
                  />
                </div>
                <div>
                  <Label>Company Name *</Label>
                  <Input
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                    placeholder="Tech Company Inc."
                  />
                </div>
                <div>
                  <Label>Start Date</Label>
                  <Input
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                    placeholder="Jan 2020"
                  />
                </div>
                <div>
                  <Label>End Date</Label>
                  <Input
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                    placeholder="Present"
                  />
                </div>
              </div>
              <div>
                <Label>Responsibilities</Label>
                <Textarea
                  value={exp.responsibilities}
                  onChange={(e) => updateExperience(exp.id, 'responsibilities', e.target.value)}
                  placeholder="• Developed web applications using React and Node.js&#10;• Collaborated with cross-functional teams&#10;• Improved system performance by 30%"
                  rows={4}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="bg-gradient-card border-white/20 shadow-elegant hover:shadow-hover transition-smooth">
        <CardHeader className="border-b border-muted/20 pb-4 flex flex-row items-center justify-between">
          <CardTitle className="text-foreground text-xl flex items-center gap-3">
            <div className="w-1 h-6 bg-foreground rounded-full"></div>
            Education
          </CardTitle>
          <Button onClick={addEducation} size="sm" className="bg-foreground text-background hover:bg-foreground/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Education
          </Button>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          {data.education.map((edu, index) => (
            <div key={edu.id} className="space-y-4 border-b border-section-border pb-4 last:border-b-0">
              <div className="flex justify-between items-start">
                <h4 className="font-medium">Education {index + 1}</h4>
                <Button
                  onClick={() => removeEducation(edu.id)}
                  variant="destructive"
                  size="sm"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Degree *</Label>
                  <Input
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    placeholder="Bachelor of Science in Computer Science"
                  />
                </div>
                <div>
                  <Label>Institution Name *</Label>
                  <Input
                    value={edu.institution}
                    onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                    placeholder="University of Technology"
                  />
                </div>
                <div>
                  <Label>Year of Passing</Label>
                  <Input
                    value={edu.year}
                    onChange={(e) => updateEducation(edu.id, 'year', e.target.value)}
                    placeholder="2020"
                  />
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card className="bg-gradient-card border-white/20 shadow-elegant hover:shadow-hover transition-smooth">
        <CardHeader className="border-b border-muted/20 pb-4 flex flex-row items-center justify-between">
          <CardTitle className="text-foreground text-xl flex items-center gap-3">
            <div className="w-1 h-6 bg-foreground rounded-full"></div>
            Certifications
          </CardTitle>
          <Button onClick={addCertification} size="sm" className="bg-foreground text-background hover:bg-foreground/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Certification
          </Button>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          {data.certifications.map((cert, index) => (
            <div key={cert.id} className="space-y-4 border-b border-section-border pb-4 last:border-b-0">
              <div className="flex justify-between items-start">
                <h4 className="font-medium">Certification {index + 1}</h4>
                <Button
                  onClick={() => removeCertification(cert.id)}
                  variant="destructive"
                  size="sm"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Certificate Name *</Label>
                  <Input
                    value={cert.name}
                    onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                    placeholder="AWS Certified Developer"
                  />
                </div>
                <div>
                  <Label>Issuing Organization *</Label>
                  <Input
                    value={cert.organization}
                    onChange={(e) => updateCertification(cert.id, 'organization', e.target.value)}
                    placeholder="Amazon Web Services"
                  />
                </div>
                <div>
                  <Label>Date</Label>
                  <Input
                    value={cert.date}
                    onChange={(e) => updateCertification(cert.id, 'date', e.target.value)}
                    placeholder="2023"
                  />
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Projects */}
      <Card className="bg-gradient-card border-white/20 shadow-elegant hover:shadow-hover transition-smooth">
        <CardHeader className="border-b border-muted/20 pb-4 flex flex-row items-center justify-between">
          <CardTitle className="text-foreground text-xl flex items-center gap-3">
            <div className="w-1 h-6 bg-foreground rounded-full"></div>
            Projects
          </CardTitle>
          <Button onClick={addProject} size="sm" className="bg-foreground text-background hover:bg-foreground/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Project
          </Button>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          {data.projects.map((proj, index) => (
            <div key={proj.id} className="space-y-4 border-b border-section-border pb-4 last:border-b-0">
              <div className="flex justify-between items-start">
                <h4 className="font-medium">Project {index + 1}</h4>
                <Button
                  onClick={() => removeProject(proj.id)}
                  variant="destructive"
                  size="sm"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-4">
                <div>
                  <Label>Project Title *</Label>
                  <Input
                    value={proj.title}
                    onChange={(e) => updateProject(proj.id, 'title', e.target.value)}
                    placeholder="E-commerce Platform"
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={proj.description}
                    onChange={(e) => updateProject(proj.id, 'description', e.target.value)}
                    placeholder="Brief description of the project and your role..."
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Technologies Used</Label>
                    <Input
                      value={proj.technologies}
                      onChange={(e) => updateProject(proj.id, 'technologies', e.target.value)}
                      placeholder="React, Node.js, MongoDB"
                    />
                  </div>
                  <div>
                    <Label>Project Link</Label>
                    <Input
                      value={proj.link}
                      onChange={(e) => updateProject(proj.id, 'link', e.target.value)}
                      placeholder="https://github.com/username/project"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeForm;