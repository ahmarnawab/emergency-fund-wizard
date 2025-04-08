
import React, { useState } from "react";
import { DollarSign, IndianRupee, Info } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import ResultDisplay from "./ResultDisplay";

const Calculator = () => {
  const { toast } = useToast();
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(3000);
  const [months, setMonths] = useState<number>(6);
  const [result, setResult] = useState<number | null>(null);
  const [savedAmount, setSavedAmount] = useState<number>(0);

  const calculateEmergencyFund = () => {
    if (monthlyExpenses <= 0) {
      toast({
        title: "Invalid input",
        description: "Monthly expenses must be greater than zero.",
        variant: "destructive",
      });
      return;
    }

    const emergencyFund = monthlyExpenses * months;
    setResult(emergencyFund);

    toast({
      title: "Emergency Fund Calculated!",
      description: `Your recommended emergency fund is ₹${emergencyFund.toLocaleString('en-IN')}.`,
    });
  };

  const handleExpenseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? 0 : parseFloat(e.target.value);
    setMonthlyExpenses(value);
  };

  const handleSavedAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? 0 : parseFloat(e.target.value);
    setSavedAmount(value);
  };

  const handleMonthsChange = (value: number[]) => {
    setMonths(value[0]);
  };

  return (
    <Card className="w-full max-w-lg border-2 border-finance-light shadow-lg">
      <CardHeader className="bg-gradient-to-r from-finance-primary to-finance-secondary text-white">
        <CardTitle className="text-2xl font-bold flex items-center">
          <IndianRupee className="mr-2 h-6 w-6" />
          Emergency Fund Calculator
        </CardTitle>
        <CardDescription className="text-white/80">
          Calculate how much you should save for emergencies
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="monthlyExpenses" className="text-sm font-medium">
                Monthly Expenses
              </Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="w-80">
                    <p>Include rent/mortgage, utilities, food, insurance, and other essential monthly costs.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="relative">
              <IndianRupee className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="monthlyExpenses"
                type="number"
                min="0"
                className="pl-10"
                value={monthlyExpenses}
                onChange={handleExpenseChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="currentSavings" className="text-sm font-medium">
                Current Emergency Savings
              </Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>How much do you currently have saved for emergencies?</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="relative">
              <IndianRupee className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="currentSavings"
                type="number"
                min="0"
                className="pl-10"
                value={savedAmount}
                onChange={handleSavedAmountChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="months" className="text-sm font-medium">
                Months of Expenses to Save: {months}
              </Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Financial experts typically recommend 3-6 months for stable income, 6-12 for variable income.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Slider
              id="months"
              min={3}
              max={12}
              step={1}
              defaultValue={[months]}
              onValueChange={handleMonthsChange}
              className="py-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>3 months</span>
              <span>6 months</span>
              <span>9 months</span>
              <span>12 months</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button 
          onClick={calculateEmergencyFund} 
          className="w-full bg-finance-accent hover:bg-finance-accent/80"
        >
          Calculate Emergency Fund
        </Button>
        
        {result !== null && (
          <ResultDisplay 
            targetAmount={result} 
            savedAmount={savedAmount} 
          />
        )}
      </CardFooter>
    </Card>
  );
};

export default Calculator;
