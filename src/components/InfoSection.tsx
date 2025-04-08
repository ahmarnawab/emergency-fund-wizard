
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const InfoSection = () => {
  return (
    <Card className="w-full max-w-lg border-2 border-finance-light mt-6">
      <CardHeader className="bg-finance-light">
        <CardTitle className="text-xl font-bold text-finance-dark">Emergency Fund Tips</CardTitle>
        <CardDescription>
          Learn more about emergency funds and best practices
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-finance-dark">What is an emergency fund?</AccordionTrigger>
            <AccordionContent>
              <p>An emergency fund is money set aside to cover large, unexpected expenses such as:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Unexpected medical expenses</li>
                <li>Major car repairs</li>
                <li>Home repairs</li>
                <li>Job loss</li>
              </ul>
              <p className="mt-2">It's a financial safety net designed to prevent you from going into debt when emergencies happen.</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-finance-dark">How much should I save?</AccordionTrigger>
            <AccordionContent>
              <p>Financial experts typically recommend saving:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>3-6 months</strong> of expenses if you have a stable income</li>
                <li><strong>6-12 months</strong> of expenses if you have an irregular income or work in an unstable field</li>
              </ul>
              <p className="mt-2">Your personal circumstances might require more or less depending on your job security, number of income sources, and financial obligations.</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-finance-dark">Where should I keep my emergency fund?</AccordionTrigger>
            <AccordionContent>
              <p>Your emergency fund should be:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Liquid</strong> - easily accessible without penalties</li>
                <li><strong>Safe</strong> - not subject to significant market risk</li>
                <li><strong>Separate</strong> - ideally in a different account from day-to-day banking</li>
              </ul>
              <p className="mt-2">Good options include high-yield savings accounts, money market accounts, or short-term CDs (if staggered to provide regular access).</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-finance-dark">How do I start building my fund?</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                <li>Start with a goal of $1,000 for immediate emergencies</li>
                <li>Set up automatic transfers to your emergency fund</li>
                <li>Consider saving windfalls like tax refunds or bonuses</li>
                <li>Review and cut unnecessary expenses to find extra money</li>
                <li>Gradually build up to your 3-12 month target</li>
              </ol>
              <p className="mt-2">Remember: even small, consistent contributions will add up over time.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default InfoSection;
