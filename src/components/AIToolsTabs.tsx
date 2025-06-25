
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AITool } from '@/data/mockData';

interface AIToolsTabsProps {
  tools: AITool[];
  activeTab: string;
  onTabChange: (toolId: string) => void;
}

const AIToolsTabs = ({ tools, activeTab, onTabChange }: AIToolsTabsProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mb-12"
    >
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
        {tools.map((tool) => (
          <motion.button
            key={tool.id}
            onClick={() => onTabChange(tool.id)}
            className={`relative flex items-center gap-2 px-6 py-3 rounded-xl whitespace-nowrap transition-all duration-300 ${
              activeTab === tool.id
                ? 'text-black'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeTab === tool.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white rounded-xl shadow-lg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 text-lg">{tool.icon}</span>
            <span className="relative z-10 font-medium">
              {tool.id === 'all' ? t('allCategories') : tool.name}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default AIToolsTabs;
