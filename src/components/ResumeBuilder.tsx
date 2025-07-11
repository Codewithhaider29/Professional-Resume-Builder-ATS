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
      <header className="bg-gradient-primary text-white shadow-elegant relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-card opacity-10"></div>
        <div className="container mx-auto px-6 py-8 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 animate-fade-in">
              <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <FileText className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Professional Resume Builder</h1>
                <p className="text-white/80 text-sm">ATS-Optimized & Industry-Ready</p>
              </div>
            </div>
            <Button
              onClick={downloadPDF}
              disabled={!isFormValid()}
              variant="secondary"
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 shadow-elegant transition-smooth animate-scale-in font-semibold"
            >
              <Download className="h-5 w-5 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {/* Form Section */}
          <div className="space-y-6 animate-slide-up">
            <div className="bg-gradient-card rounded-xl p-8 shadow-elegant border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-8 bg-foreground rounded-full"></div>
                <h2 className="text-2xl font-bold text-foreground">
                  Resume Information
                </h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fill out the form below to create your professional resume. 
                Watch the preview update automatically as you type.
              </p>
            </div>
            
            <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2 space-y-4">
              <ResumeForm data={resumeData} onChange={setResumeData} />
            </div>
          </div>

          {/* Preview Section */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-card rounded-xl p-8 shadow-elegant border border-white/20 sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-foreground rounded-full"></div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Live Preview
                  </h2>
                </div>
                <div className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                  ATS-Optimized
                </div>
              </div>
              
              <div className="border border-muted rounded-xl overflow-hidden shadow-hover transition-smooth">
                <div className="max-h-[calc(100vh-280px)] overflow-y-auto">
                  <ResumePreview data={resumeData} />
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  ✨ This preview uses ATS-friendly formatting with single column layout, 
                  semantic HTML structure, standard fonts, and clean typography for maximum compatibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-card border-t border-muted/20 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-muted-foreground font-medium">
              ✨ Professional Resume Builder
            </p>
            <p className="text-sm text-muted-foreground/80 mt-2">
              Create ATS-optimized resumes that get you noticed by employers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResumeBuilder;