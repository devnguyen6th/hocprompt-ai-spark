
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
      layout={false}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -4 }}
      transition={{ 
        duration: 0.2,
        ease: "easeOut"
      }}
      className="group relative cursor-pointer"
      onClick={handleClick}
    >
      {/* Card Link */}
      <div className="group relative mb-3 aspect-video w-full overflow-hidden rounded-xl bg-white/5 border border-white/10">
        {prompt.isAd && (
          <div className="absolute top-3 right-3 z-10 px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
            {t('sponsored')}
          </div>
        )}
        
        <div className="relative h-full w-full">
          <img
            src={prompt.imageUrl}
            alt={prompt.title[currentLang]}
            className="absolute inset-0 h-full w-full object-cover object-center"
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

          {/* Hover overlay with buttons */}
          <div className="absolute inset-0 hidden items-end justify-center gap-2 bg-black/30 p-3 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 md:flex">
            <div className="flex w-full translate-y-8 transform gap-2 transition-transform duration-300 ease-out group-hover:translate-y-0">
              <Button className="flex h-10 w-full rounded-xl bg-white text-black hover:bg-white/90">
                {t('copy')}
              </Button>
              <Button 
                variant="outline" 
                className="flex h-10 w-full rounded-xl border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                {t('edit')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Info */}
      <div className="flex items-start gap-3">
        <div className="relative flex overflow-hidden rounded-full shrink-0 border border-white/20 h-9 w-9">
          <div className="h-full w-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-medium">
            AI
          </div>
        </div>

        <div className="flex w-full min-w-0 justify-between">
          <div className="flex flex-col truncate">
            <div className="flex items-center gap-2 truncate">
              <p className="overflow-hidden truncate whitespace-nowrap text-white font-medium">
                {prompt.title[currentLang]}
              </p>
              <span className="inline-block rounded-md px-2 py-0.5 text-xs font-medium bg-blue-500/20 text-blue-300">
                {prompt.category}
              </span>
            </div>
            <div className="flex h-5 items-center gap-2 text-sm text-white/60">
              <p>{prompt.tags.length} tags</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PromptCard;
