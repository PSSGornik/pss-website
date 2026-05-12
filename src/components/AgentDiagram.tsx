'use client';

import { motion } from 'framer-motion';

const agents = [
  { id: 'ceo', label: 'CEO Agent', subtitle: 'Strategic Oversight', x: 350, y: 30 },
  { id: 'coo', label: 'COO Sydney', subtitle: 'Operations Manager', x: 350, y: 140 },
  { id: 'bd', label: 'BD Agent', subtitle: 'Business Dev', x: 70, y: 260 },
  { id: 'ops', label: 'Ops Agent', subtitle: 'Operations', x: 210, y: 260 },
  { id: 'cs', label: 'CS Agent', subtitle: 'Customer Success', x: 350, y: 260 },
  { id: 'fin', label: 'Finance Agent', subtitle: 'Financial Ops', x: 490, y: 260 },
  { id: 'comms', label: 'Comms Agent', subtitle: 'Communications', x: 630, y: 260 },
];

const edges = [
  { from: 'ceo', to: 'coo' },
  { from: 'coo', to: 'bd' },
  { from: 'coo', to: 'ops' },
  { from: 'coo', to: 'cs' },
  { from: 'coo', to: 'fin' },
  { from: 'coo', to: 'comms' },
];

export default function AgentDiagram() {
  const getAgent = (id: string) => agents.find((a) => a.id === id)!;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full overflow-x-auto"
    >
      <svg
        viewBox="0 0 740 340"
        className="w-full max-w-4xl mx-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {edges.map((edge) => {
          const from = getAgent(edge.from);
          const to = getAgent(edge.to);
          return (
            <line
              key={`${edge.from}-${edge.to}`}
              x1={from.x + 50}
              y1={from.y + 50}
              x2={to.x + 50}
              y2={to.y}
              stroke="rgba(59,130,246,0.3)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          );
        })}

        {agents.map((agent) => (
          <g key={agent.id}>
            <rect
              x={agent.x}
              y={agent.y}
              width="100"
              height="60"
              rx="8"
              fill="rgba(255,255,255,0.03)"
              stroke="rgba(59,130,246,0.2)"
              strokeWidth="1"
            />
            {agent.id === 'ceo' && (
              <rect
                x={agent.x}
                y={agent.y}
                width="100"
                height="60"
                rx="8"
                fill="none"
                stroke="rgba(59,130,246,0.4)"
                strokeWidth="1.5"
              />
            )}
            <text
              x={agent.x + 50}
              y={agent.y + 25}
              textAnchor="middle"
              fill="#F8F8FF"
              fontSize="11"
              fontWeight="600"
              fontFamily="Space Grotesk, sans-serif"
            >
              {agent.label}
            </text>
            <text
              x={agent.x + 50}
              y={agent.y + 42}
              textAnchor="middle"
              fill="#6B7280"
              fontSize="9"
              fontFamily="Inter, sans-serif"
            >
              {agent.subtitle}
            </text>
          </g>
        ))}
      </svg>
    </motion.div>
  );
}
