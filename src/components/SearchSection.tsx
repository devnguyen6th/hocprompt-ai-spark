
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUp, Plus, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
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
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16 mt-8"
    >
      {/* Title Section */}
      <div className="mb-4 flex flex-col items-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-2 flex items-center gap-1 text-2xl font-medium leading-none text-white sm:text-3xl md:mb-2.5 md:text-5xl"
        >
          <span className="pt-0.5 tracking-tight md:pt-0">
            {t('title')} <span className="md:sr-only">hocprompt</span>
          </span>
          <div className="flex flex-col gap-1.5 ml-2 hidden sm:ml-3 md:ml-4 md:flex">
            <div className="text-3xl">🎯</div>
          </div>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 max-w-[25ch] text-center text-lg leading-tight text-white/65 md:max-w-full md:text-xl"
        >
          {t('description')}
        </motion.p>
      </div>

      {/* Search Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full max-w-3xl mx-auto"
      >
        <div className="relative w-full">
          <div className="flex w-full flex-col items-center">
            <div className="relative size-full">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
                className="group flex flex-col gap-2 p-3 w-full rounded-3xl border border-white/20 bg-white/5 backdrop-blur-md text-base shadow-xl transition-all duration-150 ease-in-out focus-within:border-white/30 hover:border-white/25"
              >
                <div className="relative flex flex-1 items-center">
                  <Textarea
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex w-full rounded-md px-2 py-2 resize-none text-[16px] leading-snug placeholder-shown:text-ellipsis placeholder-shown:whitespace-nowrap md:text-base bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 max-h-[200px] text-white placeholder:text-white/50 flex-1"
                    style={{ minHeight: '80px', height: '80px' }}
                    placeholder=""
                  />
                  <div className="absolute left-2 top-2 pointer-events-none">
                    {!searchQuery && <TypewriterText />}
                  </div>
                </div>

                <div className="flex gap-1 flex-wrap items-center">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full p-0 text-white/60 hover:text-white hover:bg-white/10"
                  >
                    <Plus className="h-5 w-5" />
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="px-3 py-2 h-8 rounded-full text-white/60 hover:text-white hover:bg-white/10 gap-1"
                  >
                    <Globe className="h-4 w-4" />
                    <span className="hidden md:flex">Public</span>
                  </Button>

                  <div className="ml-auto flex items-center gap-1">
                    <Button
                      type="submit"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-white text-black hover:bg-white/90"
                      disabled={!searchQuery.trim()}
                    >
                      <ArrowUp className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SearchSection;
