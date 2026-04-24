"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { motion } from "framer-motion"

function FAQ() {
  return (
    <div className="mt-16 mb-10 flex flex-col items-start gap-10 px-6 lg:flex-row lg:px-14">
      {/* LEFT SIDE */}

      <div className="flex-1 text-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4"
        >
          <div className="h-14 w-[2px] rounded-full bg-brand-red" />
          <h2 className="text-3xl font-bold tracking-wide text-black">FAQ</h2>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 text-4xl font-black"
        >
          Any doubts?
          <br />
          We’re here to help
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-md mt-4 mb-1 max-w-md font-semibold text-black"
        >
          Can't find what you're looking for? <br />{" "}
          <span className="">
            Contact us here:{" "}
            <span className="font-light text-brand-red italic">
              hello@bogixglobal.com
            </span>
          </span>
        </motion.p>

        {/* <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="group text-md relative inline-block cursor-pointer font-serif text-black"
        >
          hello@bogixglobal.com
          <span className="absolute -bottom-1 left-0 h-[1px] w-0 cursor-pointer bg-white transition-all duration-300 group-hover:w-full" />
        </motion.span> */}
      </div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full flex-1"
      >
        <Accordion
          type="single"
          collapsible
          defaultValue="shipping"
          className="w-full"
        >
          <AccordionItem value="booking-time ">
            <AccordionTrigger className="font-bold text-brand-gold">
              How fast can I book a vehicle?
            </AccordionTrigger>
            <AccordionContent className="">
              Booking takes just a few minutes. Choose your vehicle, select your
              dates, and confirm instantly with our seamless system.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="locations">
            <AccordionTrigger className="font-bold">
              Where are your services available?
            </AccordionTrigger>
            <AccordionContent className="">
              We operate across multiple cities and regions, offering flexible
              pickup and drop-off locations to match your journey.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="vehicles">
            <AccordionTrigger className="font-bold text-brand-gold">
              What types of vehicles do you offer?
            </AccordionTrigger>
            <AccordionContent className="">
              Our fleet includes economy cars, luxury vehicles, SUVs, and
              transport vans — all maintained to the highest standards.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="requirements">
            <AccordionTrigger className="font-bold">
              What do I need to rent a car?
            </AccordionTrigger>
            <AccordionContent className="">
              You’ll need a valid driver’s license, identification, and a
              payment method. Requirements may vary slightly depending on the
              vehicle.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="flexibility">
            <AccordionTrigger className="font-bold text-brand-gold">
              Can I modify or cancel my booking?
            </AccordionTrigger>
            <AccordionContent className="">
              Yes, we offer flexible booking options. You can modify or cancel
              your reservation easily, depending on the selected terms.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  )
}

export default FAQ
