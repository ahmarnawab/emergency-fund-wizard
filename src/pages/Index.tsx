
import React from "react";
import Calculator from "@/components/Calculator";
import InfoSection from "@/components/InfoSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-finance-light/30">
      <div className="container px-4 py-8 md:py-16 mx-auto">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-finance-dark mb-2">
            Emergency Fund Calculator (₹)
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Plan your financial safety net with our easy-to-use calculator. 
            Determine how much you need to save in Indian Rupees for unexpected expenses.
          </p>
        </header>
        
        <div className="flex flex-col items-center justify-center">
          <Calculator />
          <InfoSection />
          
          <footer className="mt-12 text-center text-sm text-gray-500">
            <p>© 2025 Emergency Fund Wizard. All calculations are estimates. Please consult a financial advisor for personalized advice.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
