import { Metadata } from "next";
import Pricing from "@/app/components/Pricing";
import PricingFAQ from "@/app/components/PricingFAQ";

const title = "Pricing";
const description = "";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function PricingPage() {
  return (
   <>
   <div className="hero min-h-screen -mt-40 flex items-center justify-center">
   <div className="flex flex-col items-center mt-40 lg:mt-10 gap-6">
      <Pricing />
      <PricingFAQ />
    </div>
    </div>
   </>
  );
  
}
