
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, Copy, Edit3 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Prompt } from '@/data/mockData';

interface PromptDialogProps {
  prompt: Prompt | null;
  isOpen: boolean;
  onClose: () => void;
}

const PromptDialog = ({ prompt, isOpen, onClose }: PromptDialogProps) => {
  const { i18n, t } = useTranslation();
  const { toast } = useToast();
  const [promptText, setPromptText] = useState('');
  const currentLang = i18n.language as 'vi' | 'en';

  useEffect(() => {
    if (prompt) {
      setPromptText(prompt.prompt[currentLang]);
    }
  }, [prompt, currentLang]);

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    toast({
      title: "Đã sao chép!",
      description: "Prompt đã được sao chép vào clipboard",
    });
  };

  if (!prompt) return null;

  const suggestions = [
    t('changeTone'),
    t('changeAudience'),
    t('makeCreative'),
    t('makeProfessional')
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 border-0">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="relative bg-white rounded-xl overflow-hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full"
              >
                <X size={20} />
              </Button>

              <div className="relative h-64 overflow-hidden">
                <img
                  src={prompt.imageUrl}
                  alt={prompt.title[currentLang]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{prompt.title[currentLang]}</h2>
                  <p className="text-lg opacity-90">{prompt.description[currentLang]}</p>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">Prompt:</label>
                  <div className="relative">
                    <Textarea
                      value={promptText}
                      onChange={(e) => setPromptText(e.target.value)}
                      className="min-h-[120px] pr-12 resize-none"
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={handleCopy}
                      className="absolute top-2 right-2"
                    >
                      <Copy size={16} />
                    </Button>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">{t('suggestions')}:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {suggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="justify-start"
                      >
                        <Edit3 size={14} className="mr-2" />
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {prompt.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button onClick={handleCopy} className="flex-1">
                    <Copy size={16} className="mr-2" />
                    {t('copy')}
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Edit3 size={16} className="mr-2" />
                    {t('edit')}
                  </Button>
                </div>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default PromptDialog;
