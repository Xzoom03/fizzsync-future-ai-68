
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const { toast } = useToast();
  const form = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const automationOptions = [
    { id: "lead-generation", label: "Lead Generation" },
    { id: "cold-email", label: "Cold Email Outreach" },
    { id: "customer-support", label: "Customer Support" },
    { id: "appointment-booking", label: "Appointment Booking" },
    { id: "social-media", label: "Social Media Management" },
    { id: "data-entry", label: "Data Entry / Internal Tasks" },
    { id: "other", label: "Other" },
  ];

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Form submitted!",
        description: "We'll be in touch with you shortly.",
      });
      
      // Reset the form
      const form = event.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#D4AFFF] text-center">
          Ready to Automate Your Future?
        </h2>
        
        <p className="text-xl text-[#D4AFFF] mb-12 max-w-2xl mx-auto text-center">
          Launch faster, grow smarter — with zero risk.
        </p>

        {/* Onboarding Form */}
        <div className="backdrop-blur-lg bg-white/5 border border-[#9B4DFF]/30 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-2 text-white text-center">
            Let's Build Your Automation
          </h3>
          <p className="text-[#D4AFFF] mb-8 text-center">
            Fill this quick form so we can understand your business and goals.
          </p>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-white">
                  First Name
                </Label>
                <Input 
                  id="firstName"
                  className="bg-white/10 border-[#9B4DFF]/30 text-white placeholder:text-[#D4AFFF]/70"
                  placeholder="Your first name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Your Email
                </Label>
                <Input 
                  id="email" 
                  type="email"
                  className="bg-white/10 border-[#9B4DFF]/30 text-white placeholder:text-[#D4AFFF]/70"
                  placeholder="email@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website" className="text-white">
                Your Website
              </Label>
              <Input 
                id="website"
                className="bg-white/10 border-[#9B4DFF]/30 text-white placeholder:text-[#D4AFFF]/70"
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessDescription" className="text-white">
                What does your business do?
              </Label>
              <Textarea 
                id="businessDescription"
                className="bg-white/10 border-[#9B4DFF]/30 text-white placeholder:text-[#D4AFFF]/70"
                placeholder="Briefly describe your business..."
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="problem" className="text-white">
                What problem do you want to solve with AI?
              </Label>
              <Textarea 
                id="problem"
                className="bg-white/10 border-[#9B4DFF]/30 text-white placeholder:text-[#D4AFFF]/70"
                placeholder="Describe the challenges you're facing..."
                rows={3}
                required
              />
            </div>

            <div className="space-y-3">
              <Label className="text-white">
                Which tasks do you want automated?
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {automationOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox id={option.id} className="data-[state=checked]:bg-[#9B4DFF] data-[state=checked]:border-[#9B4DFF]" />
                    <Label 
                      htmlFor={option.id} 
                      className="text-[#D4AFFF] cursor-pointer"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-[#9B4DFF] hover:bg-[#8A3DFF] text-white px-10 py-6 text-xl font-medium shadow-lg shadow-[#9B4DFF]/30 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? "Submitting..." : "Submit & Book Free Call"}
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#9B4DFF] rounded-full mix-blend-multiply filter blur-[120px] opacity-15 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#4B0082] rounded-full mix-blend-multiply filter blur-[150px] opacity-10 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default CTASection;
