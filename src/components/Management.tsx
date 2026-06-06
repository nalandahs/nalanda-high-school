"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const managementTeam = [
  {
    id: 1,
    name: "Atluri Murali Krishna",
    role: "President",
    image: "/profile-1.png",
  },
  {
    id: 2,
    name: "Engu Srinivas",
    role: "Secretary & Correspondent",
    image: "/profile-2.png",
  },
  {
    id: 3,
    name: "Nungunoori Prakasham",
    role: "Honorary President",
    image: "/profile-3.png",
  },
];

export default function Management() {
  return (
    <section id="management" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[var(--color-brand-teal)]/5 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[var(--color-brand-gold)]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[var(--color-brand-red)] font-bold tracking-wider text-sm uppercase mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-1 bg-[var(--color-brand-red)] rounded-full"></span>
              Leadership
              <span className="w-8 h-1 bg-[var(--color-brand-red)] rounded-full"></span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Management <span className="text-[var(--color-brand-teal)]">Committee</span>
            </h3>
            <p className="text-lg text-slate-600">
              Guiding Nalanda High School with a vision of excellence, innovation, and holistic student development.
            </p>
          </motion.div>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {managementTeam.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2"
            >
              {/* Image Container with Hover Effect */}
              <div className="relative w-48 h-48 mb-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-teal)] to-[var(--color-brand-gold)] rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-100 flex items-center justify-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 192px, 192px"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-slate-900 font-heading">
                  {member.name}
                </h4>
                <p className="text-[var(--color-brand-red)] font-semibold text-sm uppercase tracking-wide">
                  {member.role}
                </p>
              </div>

              {/* Decorative Accent Line */}
              <div className="w-12 h-1 bg-[var(--color-brand-gold)] rounded-full mt-6 opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
