
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SearchSection from '@/components/SearchSection';
import AIToolsTabs from '@/components/AIToolsTabs';
import PromptCard from '@/components/PromptCard';
import PromptDialog from '@/components/PromptDialog';
import Header from '@/components/Header';
import { aiTools, prompts, Prompt } from '@/data/mockData';

const Index = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredPrompts = useMemo(() => {
    return prompts.filter((prompt) => {
      const matchesCategory = activeTab === 'all' || prompt.category === activeTab;
      const matchesSearch = 
        searchQuery === '' ||
        prompt.title.vi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.description.vi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.description.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const handlePromptClick = (prompt: Prompt) => {
    if (!prompt.isAd) {
      setSelectedPrompt(prompt);
      setIsDialogOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#1c1c1c]">
      <Header />
      
      {/* Main Content */}
      <div className="container mx-auto px-6 pt-20">
        <SearchSection onSearch={setSearchQuery} />
        
        <AIToolsTabs
          tools={aiTools}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Prompt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-16">
          {filteredPrompts.map((prompt) => (
            <PromptCard
              key={prompt.id}
              prompt={prompt}
              onClick={() => handlePromptClick(prompt)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredPrompts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-white/70 text-lg">
              {t('noPromptsFound')}
            </p>
          </motion.div>
        )}
      </div>

      {/* Prompt Dialog */}
      <PromptDialog
        prompt={selectedPrompt}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default Index;
