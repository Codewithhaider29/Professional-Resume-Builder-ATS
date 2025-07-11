import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import ResumeForm, { ResumeData } from './ResumeForm';
import ResumePreview from './ResumePreview';
import { Download, FileText } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const ResumeBuilder: React.FC = () => {
  const { toast } = useToast();
  
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      website: '',
      address: ''
    },
    summary: '',
    skills: [],
    experience: [],
    education: [],
    certifications: [],
    projects: []
  });

  const downloadPDF = async () => {
    const element = document.getElementById('resume-preview');
    if (!element) {
      toast({
        title: 'Error',
        description: 'Resume preview not found. Please try again.',
        variant: 'destructive'
      });
      return;
    }

    const opt = {
      margin: 0.5,
      filename: `${resumeData.personalInfo.fullName || 'resume'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        letterRendering: true
      },
      jsPDF: { 
        unit: 'in', 
        format: 'a4', 
        orientation: 'portrait' 
      }
    };

    try {
      toast({
        title: 'Generating PDF...',
        description: 'Please wait while we prepare your resume for download.',
      });
      
      await html2pdf().from(element).set(opt).save();
      
      toast({
        title: 'Success!',
        description: 'Your resume has been downloaded successfully.',
      });
    } catch (error) {
      console.error('PDF generation error:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate PDF. Please try again.',
        variant: 'destructive'
      });
    }
  };

  const isFormValid = () => {
    return resumeData.personalInfo.fullName.trim() !== '' && 
           resumeData.personalInfo.email.trim() !== '';
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-gradient-primary text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8" />
              <h1 className="text-2xl font-bold">ATS Resume Builder</h1>
            </div>
            <Button
              onClick={downloadPDF}
              disabled={!isFormValid()}
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Download className="h-5 w-5 mr-2" />
              Download PDF
            </Button>
          </div>
          <p className="mt-2 text-blue-100">
            Create a professional, ATS-friendly resume with live preview
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-form">
              <h2 className="text-xl font-semibold text-primary mb-4">
                Resume Information
              </h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below to create your professional resume. 
                The preview will update automatically as you type.
              </p>
            </div>
            
            <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
              <ResumeForm data={resumeData} onChange={setResumeData} />
            </div>
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-form sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-primary">
                  Live Preview
                </h2>
                <div className="text-sm text-muted-foreground">
                  ATS-Optimized Format
                </div>
              </div>
              
              <div className="border border-form-border rounded-lg overflow-hidden">
                <div className="max-h-[calc(100vh-250px)] overflow-y-auto">
                  <ResumePreview data={resumeData} />
                </div>
              </div>
              
              <div className="mt-4 text-xs text-muted-foreground text-center">
                📌 This preview uses ATS-friendly formatting: single column, 
                semantic HTML, standard fonts, and no graphics.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-form-border mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              ✨ ATS Resume Builder - Create professional resumes optimized for 
              Applicant Tracking Systems
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResumeBuilder;