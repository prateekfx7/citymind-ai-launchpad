import { motion } from "framer-motion";

export function Approach() {
  return (
    <section className="relative w-full bg-background py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground font-body mb-6"
        >
          Our Approach
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground"
        >
          Building intelligence that <em className="italic">feels human</em>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-muted-foreground max-w-[640px] leading-relaxed font-body"
        >
          We design AI agents that work alongside cities and citizens — adapting in real time,
          surfacing insight when it matters, and quietly handling the complexity behind better
          urban decisions.
        </motion.p>
      </div>
    </section>
  );
}
