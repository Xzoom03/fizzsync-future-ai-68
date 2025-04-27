
const DashboardMockup = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16">
      <div className="bg-gradient-to-r from-[#1A1F2C] to-black rounded-xl p-1">
        <div className="bg-black/80 rounded-lg p-6">
          <div className="grid grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-24 rounded-lg bg-gradient-to-br from-[#1A1F2C] to-[#8B5CF6]/20 animate-pulse" />
            ))}
          </div>
          <div className="mt-4 h-40 rounded-lg bg-gradient-to-br from-[#1A1F2C] to-[#8B5CF6]/10" />
          <div className="mt-4 grid grid-cols-2 gap-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="h-32 rounded-lg bg-gradient-to-br from-[#1A1F2C] to-[#8B5CF6]/20" />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8B5CF6] to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
    </div>
  );
};

export default DashboardMockup;
