
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import { useState } from 'react';

const Header = () => {
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // You can implement actual theme switching logic here
  };

  const navItems = [
    { label: 'Community', href: '#' },
    { label: 'Enterprise', href: '#' },
    { label: 'Learn', href: '#' },
    { label: 'Shipped', href: '#' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1c1c1c]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white font-bold text-xl"
            >
              🎯 hocprompt
            </motion.div>
            
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right side - Theme toggle and Language switcher */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </Button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
