import ContactForm from "@/components/sections/ContactForm/page";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Contact = () => {
  return (
    <main className="pt-32 pb-20 lg:pt-40 min-h-[70svh] lg:pb-28 px-5 lg:px-20">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Contact Info */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1>Got any Questions?</h1>
            <h6 className="text-black font-normal">
              Reach out to us for any inquiries or custom orders.
            </h6>
          </div>

          <div className="flex flex-col gap-4 ">
            <div className="flex flex-row gap-2 items-center">
              <Icon icon="ic:outline-email" fontSize={22} />
              <p className="text-xl">sonam@yoldongcarpets.com</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Icon icon="ic:baseline-phone" fontSize={22} />
              <p className="text-xl">1234567890</p>
            </div>
          </div>
        </div>
        <Card>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        {/* Right: Form */}
      </div>
    </main>
  );
};

export default Contact;
