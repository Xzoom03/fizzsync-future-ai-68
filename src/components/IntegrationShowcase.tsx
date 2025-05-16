
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  FileText, Briefcase, BarChart3, MessageSquare, MailCheck, 
  CalendarCheck, FileSpreadsheet, CreditCard, Building2, Globe, Mail,
  Check, AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AppCardProps {
  name: string;
  icon: React.ReactNode;
  description: string;
  isPopular?: boolean;
}

const AppCard: React.FC<AppCardProps> = ({ name, icon, description, isPopular = false }) => {
  return (
    <div className="relative group flex flex-col h-full bg-white/5 backdrop-blur-sm rounded-xl border border-[#9B4DFF]/20 p-5 transition-all duration-300 hover:bg-[#9B4DFF]/10 hover:border-[#9B4DFF]/30 hover:shadow-lg hover:shadow-[#9B4DFF]/5 hover:-translate-y-1">
      {isPopular && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#9B4DFF] to-[#8A3DFF] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          Popular
        </div>
      )}
      <div className="mb-4 h-14 w-14 bg-[#9B4DFF]/10 flex items-center justify-center rounded-xl text-[#9B4DFF] group-hover:text-white group-hover:bg-[#9B4DFF] transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#D4AFFF] transition-colors duration-300">{name}</h3>
      <p className="text-[#D4AFFF]/80 mb-4 flex-grow">{description}</p>
      <Button variant="outline" className="w-full bg-transparent border border-[#9B4DFF]/20 text-[#D4AFFF] hover:bg-[#9B4DFF]/20 hover:border-[#9B4DFF]/50 hover:text-white transition-all duration-300">
        Connect
      </Button>
    </div>
  );
};

const IntegrationShowcase = () => {
  const featuredApps = [
    {
      name: 'Gmail',
      icon: <Mail className="h-8 w-8 group-hover:text-white transition-colors" />,
      description: 'Send and receive emails directly from your automation.',
      isPopular: true,
    },
    {
      name: 'Google Sheets',
      icon: <FileSpreadsheet className="h-8 w-8 group-hover:text-white transition-colors" />,
      description: 'Update and read data from spreadsheets automatically.',
    },
    {
      name: 'Salesforce',
      icon: <Building2 className="h-8 w-8 group-hover:text-white transition-colors" />,
      description: 'Sync customer data and automate CRM processes.',
      isPopular: true,
    },
    {
      name: 'WhatsApp',
      icon: <MessageSquare className="h-8 w-8 group-hover:text-white transition-colors" />,
      description: 'Send automated messages and notifications.',
    },
    {
      name: 'HubSpot',
      icon: <Globe className="h-8 w-8 group-hover:text-white transition-colors" />,
      description: 'Automate marketing and customer service tasks.',
    },
    {
      name: 'Slack',
      icon: <MessageSquare className="h-8 w-8 group-hover:text-white transition-colors" />,
      description: 'Get notifications and automate workflows.',
      isPopular: true,
    },
  ];

  const allApps = [
    { name: 'Notion', icon: <FileText className="h-10 w-10 group-hover:text-white transition-colors" /> },
    { name: 'Zapier', icon: <Briefcase className="h-10 w-10 group-hover:text-white transition-colors" /> },
    { name: 'Asana', icon: <Check className="h-10 w-10 group-hover:text-white transition-colors" /> },
    { name: 'Zendesk', icon: <AlertCircle className="h-10 w-10 group-hover:text-white transition-colors" /> },
    { name: 'Google Analytics', icon: <BarChart3 className="h-10 w-10 group-hover:text-white transition-colors" /> },
    { name: 'Slack', icon: <MessageSquare className="h-10 w-10 group-hover:text-white transition-colors" /> },
    { name: 'Gmail', icon: <MailCheck className="h-10 w-10 group-hover:text-white transition-colors" /> },
    { 
      name: 'Airtable', 
      icon: <div className="flex items-center justify-center h-10 w-10 group-hover:text-white transition-colors">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M3 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M3 18H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 3L12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    },
    { name: 'Stripe', icon: <CreditCard className="h-10 w-10 group-hover:text-white transition-colors" /> },
    { name: 'Calendly', icon: <CalendarCheck className="h-10 w-10 group-hover:text-white transition-colors" /> },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#D4AFFF]">
          Works With Your Favorite Tools
        </h2>
        
        <p className="text-[#D4AFFF] mb-12 max-w-3xl mx-auto text-center">
          FizzSync integrates seamlessly with all the tools you already use, so you can automate workflows across your entire tech stack.
        </p>
        
        {/* Featured Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredApps.map((app, index) => (
            <AppCard 
              key={index}
              name={app.name}
              icon={app.icon}
              description={app.description}
              isPopular={app.isPopular}
            />
          ))}
        </div>
        
        {/* All Apps Section */}
        <h3 className="text-2xl font-bold mb-8 text-center text-white">And many more...</h3>
        
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {allApps.map((app, index) => (
            <div key={index} className="group flex flex-col items-center">
              <div className="h-20 w-20 bg-white/5 hover:bg-[#9B4DFF]/20 backdrop-blur-sm flex items-center justify-center rounded-xl border border-[#9B4DFF]/20 hover:border-[#9B4DFF]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#9B4DFF]/5 mb-2 text-[#D4AFFF] hover:text-white">
                {app.icon}
              </div>
              <span className="text-sm text-[#D4AFFF]/80 group-hover:text-white transition-colors duration-300">{app.name}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            className="bg-gradient-to-r from-[#9B4DFF]/30 to-[#8A3DFF]/30 hover:from-[#9B4DFF]/50 hover:to-[#8A3DFF]/50 text-white border border-[#9B4DFF]/30 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#9B4DFF]/10"
          >
            View All Integrations
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-[#6A0DAD] rounded-full mix-blend-multiply filter blur-[180px] opacity-15 animate-blob"></div>
      <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-[#9B4DFF] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default IntegrationShowcase;
