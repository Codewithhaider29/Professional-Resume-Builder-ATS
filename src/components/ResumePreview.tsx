import React from 'react';
import { ResumeData } from './ResumeForm';

interface ResumePreviewProps {
  data: ResumeData;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  return (
    <div 
      id="resume-preview" 
      className="bg-preview-bg text-preview-text max-w-[8.5in] mx-auto p-8 shadow-preview"
      style={{ 
        fontFamily: 'Arial, sans-serif',
        fontSize: '11pt',
        lineHeight: '1.4',
        color: '#000000'
      }}
    >
      {/* Header Section */}
      <header className="text-center mb-6">
        <h1 
          className="text-2xl font-bold mb-2" 
          style={{ fontSize: '18pt', fontWeight: 'bold', margin: '0 0 8px 0' }}
        >
          {data.personalInfo.fullName || 'Your Name'}
        </h1>
        <div className="text-sm space-y-1" style={{ fontSize: '10pt' }}>
          {data.personalInfo.email && (
            <div>{data.personalInfo.email}</div>
          )}
          {data.personalInfo.phone && (
            <div>{data.personalInfo.phone}</div>
          )}
          {data.personalInfo.address && (
            <div>{data.personalInfo.address}</div>
          )}
          <div className="flex justify-center gap-4 flex-wrap">
            {data.personalInfo.linkedin && (
              <span>{data.personalInfo.linkedin}</span>
            )}
            {data.personalInfo.github && (
              <span>{data.personalInfo.github}</span>
            )}
            {data.personalInfo.website && (
              <span>{data.personalInfo.website}</span>
            )}
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.summary && (
        <section className="mb-6">
          <h2 
            className="text-lg font-bold mb-2 border-b border-gray-300 pb-1"
            style={{ fontSize: '12pt', fontWeight: 'bold', marginBottom: '8px', borderBottom: '1px solid #000', paddingBottom: '2px' }}
          >
            PROFESSIONAL SUMMARY
          </h2>
          <p style={{ margin: '0', textAlign: 'justify' }}>
            {data.summary}
          </p>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-6">
          <h2 
            className="text-lg font-bold mb-2 border-b border-gray-300 pb-1"
            style={{ fontSize: '12pt', fontWeight: 'bold', marginBottom: '8px', borderBottom: '1px solid #000', paddingBottom: '2px' }}
          >
            SKILLS
          </h2>
          <p style={{ margin: '0' }}>
            {data.skills.join(' • ')}
          </p>
        </section>
      )}

      {/* Work Experience */}
      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2 
            className="text-lg font-bold mb-2 border-b border-gray-300 pb-1"
            style={{ fontSize: '12pt', fontWeight: 'bold', marginBottom: '8px', borderBottom: '1px solid #000', paddingBottom: '2px' }}
          >
            WORK EXPERIENCE
          </h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4" style={{ marginBottom: '16px' }}>
              <div className="flex justify-between items-start mb-1">
                <h3 
                  className="font-semibold"
                  style={{ fontSize: '11pt', fontWeight: 'bold', margin: '0' }}
                >
                  {exp.title}
                </h3>
                <span 
                  className="text-sm"
                  style={{ fontSize: '10pt' }}
                >
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <div 
                className="font-medium mb-2"
                style={{ fontSize: '11pt', fontStyle: 'italic', margin: '0 0 4px 0' }}
              >
                {exp.company}
              </div>
              {exp.responsibilities && (
                <div 
                  className="text-sm"
                  style={{ fontSize: '10pt', margin: '0' }}
                >
                  {exp.responsibilities.split('\n').map((line, index) => (
                    <div key={index} style={{ margin: '0 0 2px 0' }}>
                      {line}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-6">
          <h2 
            className="text-lg font-bold mb-2 border-b border-gray-300 pb-1"
            style={{ fontSize: '12pt', fontWeight: 'bold', marginBottom: '8px', borderBottom: '1px solid #000', paddingBottom: '2px' }}
          >
            EDUCATION
          </h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-3" style={{ marginBottom: '12px' }}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 
                    className="font-semibold"
                    style={{ fontSize: '11pt', fontWeight: 'bold', margin: '0' }}
                  >
                    {edu.degree}
                  </h3>
                  <div 
                    className="font-medium"
                    style={{ fontSize: '11pt', fontStyle: 'italic', margin: '0' }}
                  >
                    {edu.institution}
                  </div>
                </div>
                {edu.year && (
                  <span 
                    className="text-sm"
                    style={{ fontSize: '10pt' }}
                  >
                    {edu.year}
                  </span>
                )}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {data.certifications.length > 0 && (
        <section className="mb-6">
          <h2 
            className="text-lg font-bold mb-2 border-b border-gray-300 pb-1"
            style={{ fontSize: '12pt', fontWeight: 'bold', marginBottom: '8px', borderBottom: '1px solid #000', paddingBottom: '2px' }}
          >
            CERTIFICATIONS
          </h2>
          {data.certifications.map((cert) => (
            <div key={cert.id} className="mb-2" style={{ marginBottom: '8px' }}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 
                    className="font-semibold"
                    style={{ fontSize: '11pt', fontWeight: 'bold', margin: '0' }}
                  >
                    {cert.name}
                  </h3>
                  <div 
                    className="font-medium"
                    style={{ fontSize: '11pt', fontStyle: 'italic', margin: '0' }}
                  >
                    {cert.organization}
                  </div>
                </div>
                {cert.date && (
                  <span 
                    className="text-sm"
                    style={{ fontSize: '10pt' }}
                  >
                    {cert.date}
                  </span>
                )}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-6">
          <h2 
            className="text-lg font-bold mb-2 border-b border-gray-300 pb-1"
            style={{ fontSize: '12pt', fontWeight: 'bold', marginBottom: '8px', borderBottom: '1px solid #000', paddingBottom: '2px' }}
          >
            PROJECTS
          </h2>
          {data.projects.map((proj) => (
            <div key={proj.id} className="mb-4" style={{ marginBottom: '16px' }}>
              <h3 
                className="font-semibold mb-1"
                style={{ fontSize: '11pt', fontWeight: 'bold', margin: '0 0 4px 0' }}
              >
                {proj.title}
                {proj.link && (
                  <span style={{ fontWeight: 'normal', fontSize: '10pt' }}>
                    {' '}({proj.link})
                  </span>
                )}
              </h3>
              {proj.description && (
                <p 
                  className="text-sm mb-1"
                  style={{ fontSize: '10pt', margin: '0 0 4px 0' }}
                >
                  {proj.description}
                </p>
              )}
              {proj.technologies && (
                <p 
                  className="text-sm font-medium"
                  style={{ fontSize: '10pt', fontStyle: 'italic', margin: '0' }}
                >
                  Technologies: {proj.technologies}
                </p>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ResumePreview;