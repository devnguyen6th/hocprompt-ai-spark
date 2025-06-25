
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import TypewriterText from './TypewriterText';

interface SearchSectionProps {
  onSearch: (query: string) => void;
}

const SearchSection = ({ onSearch }: SearchSectionProps) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
      >
        {t('title')}
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
      >
        {t('description')}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative max-w-2xl mx-auto"
      >
        <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl">
          <Search className="absolute left-4 text-white/60" size={20} />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder=""
            className="pl-12 pr-16 py-6 text-lg bg-transparent border-0 text-white placeholder:text-white/60 focus:ring-0 focus:ring-offset-0"
          />
          <div className="absolute left-12 top-6 pointer-events-none">
            {!searchQuery && <TypewriterText />}
          </div>
          <Button
            onClick={handleSearch}
            size="sm"
            className="absolute right-2 bg-white text-black hover:bg-white/90 rounded-lg"
          >
            <ArrowRight size={16} />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SearchSection;
