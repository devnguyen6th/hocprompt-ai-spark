
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Play, ExternalLink } from 'lucide-react';
import { Prompt } from '@/data/mockData';

interface PromptCardProps {
  prompt: Prompt;
  onClick: () => void;
}

const PromptCard = ({ prompt, onClick }: PromptCardProps) => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language as 'vi' | 'en';

  const handleClick = () => {
    if (prompt.isAd && prompt.adUrl) {
      window.open(prompt.adUrl, '_blank');
    } else {
      onClick();
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
      onClick={handleClick}
    >
      {prompt.isAd && (
        <div className="absolute top-3 right-3 z-10 px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
          {t('sponsored')}
        </div>
      )}
      
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={prompt.imageUrl}
          alt={prompt.title[currentLang]}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {prompt.videoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
          >
            <Play className="text-white" size={48} />
          </motion.div>
        )}

        {prompt.isAd && (
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-blue-500/20 flex items-center justify-center"
          >
            <ExternalLink className="text-white" size={32} />
          </motion.div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {prompt.title[currentLang]}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {prompt.description[currentLang]}
        </p>
        <div className="flex flex-wrap gap-2">
          {prompt.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PromptCard;
