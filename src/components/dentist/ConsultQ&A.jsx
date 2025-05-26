import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ConsultQAndA = () => {
  return (
    <div
      id="consultQA"
      className="bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded p-4 mt-5"
    >
      <h5 className="font-inter font-semibold text-[#1A1A1A]">Consult Q&A</h5>
      <Accordion className="" type="single" collapsible>
        {Array.from({ length: 5 }).map((_, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-sm">
              Q. Where does Dr. Tany Batra practice?
            </AccordionTrigger>
            <AccordionContent>
              Dr. Tanya Batra at All Care Dental Centre - since 1969 -
              Indiranagar.
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ConsultQAndA;
