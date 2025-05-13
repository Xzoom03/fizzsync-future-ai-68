
import React from 'react';
import { 
  MailCheck, 
  CalendarCheck, 
  CreditCard, 
  MessageCircle, 
  FileSpreadsheet,
  Database,
  Linkedin
} from 'lucide-react';
import { cn } from '@/lib/utils';

const IntegrationShowcase = () => {
  const integrations = [
    { 
      name: 'Telegram', 
      icon: <div className="flex items-center justify-center h-10 w-10">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div> 
    },
    { 
      name: 'WhatsApp', 
      icon: <div className="flex items-center justify-center h-10 w-10">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 8H15C16.1046 8 17 8.89543 17 10V14C17 15.1046 16.1046 16 15 16H9C7.89543 16 7 15.1046 7 14V10C7 8.89543 7.89543 8 9 8Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M7 10L12 13L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div> 
    },
    { 
      name: 'Slack', 
      icon: <MessageCircle className="h-10 w-10" /> 
    },
    { 
      name: 'Supabase', 
      icon: <Database className="h-10 w-10" /> 
    },
    { 
      name: 'Google Sheets', 
      icon: <FileSpreadsheet className="h-10 w-10" /> 
    },
    { 
      name: 'Apify', 
      icon: <div className="flex items-center justify-center h-10 w-10">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 8V16M9 8V16M12 6V18M15 8V16M20 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div> 
    },
    { 
      name: 'LinkedIn',
      icon: <Linkedin className="h-10 w-10" />
    },
    { 
      name: 'n8n', 
      icon: <div className="flex items-center justify-center h-10 w-10">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </div> 
    },
    { name: 'Gmail', icon: <MailCheck className="h-10 w-10" /> },
    { 
      name: 'Airtable', 
      icon: <div className="flex items-center justify-center h-10 w-10">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M3 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M3 18H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M9 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    },
    { name: 'Stripe', icon: <CreditCard className="h-10 w-10" /> },
    { name: 'Calendly', icon: <CalendarCheck className="h-10 w-10" /> },
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#D4AFFF]">
          Works with Your Favorite Tools
        </h2>
        
        <p className="text-[#D4AFFF] mb-12 max-w-2xl mx-auto">
          FizzSync integrates seamlessly with the platforms you already use.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center mx-auto">
          {integrations.map((integration) => (
            <div key={integration.name} className="group flex flex-col items-center">
              <div className={cn(
                "bg-white/10 backdrop-blur-lg rounded-2xl p-6 w-20 h-20 flex items-center justify-center",
                "border border-[#9B4DFF]/30 shadow-lg mb-3 group-hover:border-[#9B4DFF]/80",
                "group-hover:shadow-[#9B4DFF]/20 group-hover:shadow-xl transition-all duration-300",
                "group-hover:scale-110 text-[#D4AFFF] group-hover:text-white"
              )}>
                {integration.icon}
              </div>
              <p className="text-white text-sm font-medium">{integration.name}</p>
            </div>
          ))}
        </div>
        
        <p className="text-[#D4AFFF]/80 mt-12 text-sm italic">
          Need custom integration? We build systems around your workflow.
        </p>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-[#9B4DFF] rounded-full mix-blend-multiply filter blur-[140px] opacity-10 animate-blob"></div>
    </section>
  );
};

export default IntegrationShowcase;
