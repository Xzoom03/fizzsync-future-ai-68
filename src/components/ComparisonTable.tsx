
import React from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';

const ComparisonTable = () => {
  const comparisonData = [
    { 
      feature: '24/7 Availability', 
      fizzSync: true, 
      hiringStaff: false, 
      otherTools: { value: false, note: 'Requires constant maintenance' } 
    },
    { 
      feature: 'Consistent Follow-Ups', 
      fizzSync: true, 
      hiringStaff: { value: true, note: 'Depends on staff reliability' }, 
      otherTools: { value: true, note: 'Often requires complex setup' } 
    },
    { 
      feature: 'Lead Qualification Automation', 
      fizzSync: true, 
      hiringStaff: false, 
      otherTools: { value: true, note: 'Limited capabilities' } 
    },
    { 
      feature: 'Cost Efficiency', 
      fizzSync: true, 
      hiringStaff: false, 
      otherTools: { value: false, note: 'High subscription costs' } 
    },
    { 
      feature: 'Speed of Setup', 
      fizzSync: true, 
      hiringStaff: { value: false, note: 'Weeks of training' }, 
      otherTools: { value: false, note: 'Complex configuration' } 
    },
    { 
      feature: 'Easy to Manage', 
      fizzSync: true, 
      hiringStaff: false, 
      otherTools: false 
    },
    { 
      feature: 'Customizable Workflows', 
      fizzSync: true, 
      hiringStaff: { value: true, note: 'Limited by staff skills' }, 
      otherTools: { value: true, note: 'Often requires technical expertise' } 
    },
    { 
      feature: 'Works with Your Tools', 
      fizzSync: true, 
      hiringStaff: { value: false, note: 'Limited by staff skills' }, 
      otherTools: { value: true, note: 'Limited integrations' } 
    },
    { 
      feature: 'Monthly Cost', 
      fizzSync: { value: true, note: 'Fixed & predictable' }, 
      hiringStaff: { value: false, note: 'High & unpredictable' }, 
      otherTools: { value: false, note: 'Scales with usage' } 
    },
  ];

  const renderStatus = (status: boolean | { value: boolean, note?: string }) => {
    if (typeof status === 'boolean') {
      return status ? (
        <Check className="text-[#4ADE80] w-6 h-6" />
      ) : (
        <X className="text-[#F75555] w-6 h-6" />
      );
    } else {
      return (
        <div className="flex flex-col items-center">
          {status.value ? (
            <Check className="text-[#4ADE80] w-6 h-6" />
          ) : (
            <X className="text-[#F75555] w-6 h-6" />
          )}
          {status.note && (
            <span className="text-xs text-[#D4AFFF]/80 mt-1">{status.note}</span>
          )}
        </div>
      );
    }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-5 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#D4AFFF]">
          Why FizzSync Wins
        </h2>
        
        <p className="text-[#D4AFFF] mb-12 max-w-3xl mx-auto text-center">
          See how FizzSync outperforms traditional hiring and bulky automation tools.
        </p>
        
        <div className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-[#9B4DFF]/20 shadow-xl shadow-[#9B4DFF]/5">
          <div className="overflow-x-auto custom-scrollbar">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-[#9B4DFF]/20">
                  <TableHead className="text-white font-semibold py-4 px-6">Feature</TableHead>
                  <TableHead className="text-white font-semibold py-4 px-6 text-center">
                    <div className="flex flex-col items-center">
                      <span className="bg-gradient-to-r from-[#9B4DFF] to-[#8A3DFF] bg-clip-text text-transparent">FizzSync</span>
                    </div>
                  </TableHead>
                  <TableHead className="text-white font-semibold py-4 px-6 text-center">Hiring Staff</TableHead>
                  <TableHead className="text-white font-semibold py-4 px-6 text-center">Other Automation Tools</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow 
                    key={index} 
                    className={cn(
                      "border-b border-[#9B4DFF]/10 hover:bg-[#9B4DFF]/10 transition-colors",
                      index % 2 === 0 ? "bg-[#9B4DFF]/5" : "bg-transparent"
                    )}
                  >
                    <TableCell className="py-4 px-6 font-medium text-white">{row.feature}</TableCell>
                    <TableCell className="py-4 px-6 text-center">{renderStatus(row.fizzSync)}</TableCell>
                    <TableCell className="py-4 px-6 text-center">{renderStatus(row.hiringStaff)}</TableCell>
                    <TableCell className="py-4 px-6 text-center">{renderStatus(row.otherTools)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-[#6A0DAD] rounded-full mix-blend-multiply filter blur-[140px] opacity-10 animate-blob animation-delay-2000"></div>
    </section>
  );
};

export default ComparisonTable;
