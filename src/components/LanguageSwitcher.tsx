
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'vi' ? 'en' : 'vi';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLanguage}
        className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
      >
        {i18n.language === 'vi' ? 'EN' : 'VN'}
      </Button>
    </motion.div>
  );
};

export default LanguageSwitcher;
