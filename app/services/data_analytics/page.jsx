"use client";

import { motion } from "framer-motion";
import {
  BsArrowUpRight,
  BsBarChart,
  BsDatabase,
  BsFileEarmarkText,
  BsGraphUpArrow,
} from "react-icons/bs";

import {
  SiPython,
  SiPandas,
  SiJupyter,
} from "react-icons/si";

import Link from "next/link";

// --------------------------------------------------
// DATA
// --------------------------------------------------

const stack = [
  {
    id: "python",
    name: "Python",
    icon: <SiPython />,
  },
  {
    id: "pandas",
    name: "Pandas",
    icon: <SiPandas />,
  },
  {
    id: "jupyter",
    name: "Jupyter",
    icon: <SiJupyter />,
  },
  {
    id: "eda",
    name: "Exploratory Analysis",
    icon: <BsBarChart />,
  },
  {
    id: "cleaning",
    name: "Data Cleaning",
    icon: <BsDatabase />,
  },
];

const insights = [
  {
    id: "01",
    text: "Conteúdos mais minimalistas apresentaram melhor retenção visual.",
  },
  {
    id: "02",
    text: "A identidade visual sombria gerou maior engajamento orgânico.",
  },
  {
    id: "03",
    text: "A frequência irregular impactou a consistência de alcance.",
  },
];

const metrics = [
  {
    id: "01",
    value: "+37%",
    label: "Engajamento médio",
  },
  {
    id: "02",
    value: "12",
    label: "Conteúdos analisados",
  },
  {
    id: "03",
    value: "3",
    label: "Padrões encontrados",
  },
];

// --------------------------------------------------
// COMPONENTS
// --------------------------------------------------

function GlowCard({ children, className = "" }) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-3xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent pointer-events-none" />

      {children}
    </div>
  );
}

function MetricCard({ item }) {
  return (
    <GlowCard className="p-8">
      <div className="flex flex-col gap-3">
        <span className="text-5xl font-bold text-accent">
          {item.value}
        </span>

        <p className="text-white/60">
          {item.label}
        </p>
      </div>
    </GlowCard>
  );
}

function StackCard({ item }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <GlowCard className="h-[140px] flex flex-col items-center justify-center gap-4">
        <div className="text-4xl text-accent">
          {item.icon}
        </div>

        <span className="text-sm text-white/70">
          {item.name}
        </span>
      </GlowCard>
    </motion.div>
  );
}

function InsightCard({ item }) {
  return (
    <GlowCard className="p-6">
      <div className="flex gap-4">
        <span className="text-accent font-bold">
          {item.id}
        </span>

        <p className="text-white/70 leading-relaxed">
          {item.text}
        </p>
      </div>
    </GlowCard>
  );
}

// --------------------------------------------------
// MAIN
// --------------------------------------------------

export default function DataAnalysisPage() {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="relative min-h-screen py-24 overflow-hidden"
    >
      {/* GRID BG */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10 px-4">
        
        {/* HERO */}
        <div className="max-w-[900px] flex flex-col gap-8 mb-24">
          
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent uppercase tracking-[0.4em] text-sm"
          >
            Data Analysis • Case Study
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-[1.1]"
          >
            Sangue Carmesim
            <br />

            <span className="text-white/40">
              Behavioral Data Analysis
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 leading-relaxed max-w-[720px]"
          >
            Estudo analítico focado em comportamento visual,
            identidade digital e padrões de engajamento no
            projeto Dark Roses, posteriormente reformulado
            para Sangue Carmesim.
          </motion.p>

          {/* ACTIONS */}
          <div className="flex flex-wrap gap-4">
            
            <Link
              href="https://github.com/FelypeDantas/ficha-tecnica-dark-roses"
              target="_blank"
              className="h-[58px] px-8 rounded-2xl bg-accent text-primary font-medium flex items-center gap-3 hover:scale-[1.03] transition"
            >
              GitHub
              <BsArrowUpRight />
            </Link>

            <Link
              href="/Dark_Roses_Case_Study.ipynb"
              className="h-[58px] px-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center gap-3 hover:border-accent/40 transition"
            >
              Notebook
              <BsFileEarmarkText />
            </Link>
          </div>
        </div>

        {/* METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {metrics.map((item) => (
            <MetricCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

        {/* MAIN CASE */}
        <GlowCard className="p-10 md:p-14 mb-24">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
            
            {/* LEFT */}
            <div className="flex flex-col gap-8">
              
              <div className="flex items-center gap-3 text-accent">
                <BsGraphUpArrow className="text-2xl" />

                <span className="uppercase tracking-[0.3em] text-sm">
                  O desafio
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight">
                Transformar comportamento digital em
                decisões estratégicas.
              </h2>

              <p className="text-white/60 leading-relaxed">
                O objetivo do estudo foi identificar padrões
                visuais e comportamentais dentro do projeto,
                analisando elementos ligados à identidade,
                engajamento e impacto visual.
              </p>

              <p className="text-white/60 leading-relaxed">
                A análise envolveu exploração de dados,
                interpretação visual e observação de
                tendências relacionadas à comunicação
                digital da marca.
              </p>
            </div>

            {/* RIGHT */}
            <GlowCard className="min-h-[420px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-6 text-center p-10">
                
                <div className="w-[120px] h-[120px] rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                  <BsBarChart className="text-5xl text-accent" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-3xl font-bold">
                    Case Study
                  </h3>

                  <p className="text-white/50 max-w-[320px]">
                    Análise exploratória aplicada ao projeto
                    Sangue Carmesim utilizando Python e
                    Jupyter Notebook.
                  </p>
                </div>
              </div>
            </GlowCard>
          </div>
        </GlowCard>

        {/* STACK */}
        <section className="mb-24">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 rounded-full bg-accent" />

            <h2 className="text-3xl font-bold">
              Stack Analítica
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
            {stack.map((item) => (
              <StackCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </section>

        {/* INSIGHTS */}
        <section className="mb-24">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 rounded-full bg-accent" />

            <h2 className="text-3xl font-bold">
              Insights Encontrados
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {insights.map((item) => (
              <InsightCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </section>

        {/* FUTURE */}
        <GlowCard className="p-10 md:p-14">
          <div className="flex flex-col gap-8">
            
            <span className="text-accent uppercase tracking-[0.3em] text-sm">
              Próximos passos
            </span>

            <h2 className="text-4xl font-bold">
              Evoluções planejadas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/60">
              
              <div className="space-y-4">
                <p>• Dashboard interativo</p>
                <p>• Automação de métricas</p>
              </div>

              <div className="space-y-4">
                <p>• Pipeline de análise</p>
                <p>• Modelagem preditiva</p>
              </div>
            </div>
          </div>
        </GlowCard>
      </div>
    </motion.section>
  );
}
