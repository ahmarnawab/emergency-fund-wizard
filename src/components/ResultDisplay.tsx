
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

interface ResultDisplayProps {
  targetAmount: number;
  savedAmount: number;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ targetAmount, savedAmount }) => {
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    // Calculate percentage with a limit of 100%
    const percentage = Math.min((savedAmount / targetAmount) * 100, 100);
    
    // Wait a moment before animating the progress
    const timer = setTimeout(() => {
      setProgressPercent(percentage);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [targetAmount, savedAmount]);

  const remaining = Math.max(targetAmount - savedAmount, 0);
  const progressColor = 
    progressPercent < 25 ? "bg-red-500" : 
    progressPercent < 50 ? "bg-orange-500" : 
    progressPercent < 75 ? "bg-yellow-500" : 
    progressPercent < 100 ? "bg-lime-500" : 
    "bg-green-500";

  return (
    <div className="w-full space-y-4">
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-sm font-semibold">Your Progress</span>
          <span className="text-sm font-medium">
            {progressPercent.toFixed(0)}%
          </span>
        </div>
        <Progress 
          value={progressPercent} 
          className={`h-2 ${progressColor}`}
          style={{ "--progress-width": `${progressPercent}%` } as React.CSSProperties}
        />
      </div>
      
      <Card className="p-4 bg-gray-50">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-xs text-muted-foreground">Target Amount</p>
            <p className="text-lg font-semibold text-finance-dark">
              ₹{targetAmount.toLocaleString('en-IN')}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Current Savings</p>
            <p className="text-lg font-semibold text-finance-accent">
              ₹{savedAmount.toLocaleString('en-IN')}
            </p>
          </div>
          <div className="col-span-2 pt-2">
            <p className="text-xs text-muted-foreground">Amount Needed</p>
            <p className="text-lg font-semibold text-finance-primary">
              ₹{remaining.toLocaleString('en-IN')}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ResultDisplay;
