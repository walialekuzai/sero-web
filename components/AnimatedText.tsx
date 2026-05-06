"use client";
import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function AnimatedText({ text, className, style, delay = 0, tag: Tag = "h1" }: Props) {
  const words = text.split(" ");

  return (
    <Tag className={className} style={{ overflow: "hidden", ...style }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", marginRight: "0.27em" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.75,
              delay: delay + i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
