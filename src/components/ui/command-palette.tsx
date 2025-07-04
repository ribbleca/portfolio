'use client';

import * as React from 'react';
import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HomeIcon, 
  FolderIcon, 
  UserIcon, 
  EnvelopeIcon, 
  SunIcon, 
  MoonIcon,
  ChatBubbleLeftIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { AIChat } from '@/components/ai-chat';

interface CommandPaletteProps {
  projects?: Array<{
    slug: string;
    title: string;
    description: string;
  }>;
}

export function CommandPalette({ projects = [] }: CommandPaletteProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [showChat, setShowChat] = React.useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  // Toggle command palette with Cmd+K / Ctrl+K
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 text-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
      >
        <MagnifyingGlassIcon className="w-4 h-4" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-xs bg-white/10 rounded">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <Command className="rounded-lg border bg-white dark:bg-gray-900 shadow-2xl">
                <div className="flex items-center border-b px-3">
                  <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                  <Command.Input
                    placeholder="Type a command or search..."
                    value={search}
                    onValueChange={setSearch}
                    className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden">
                  <Command.Empty className="py-6 text-center text-sm text-gray-500">
                    No results found.
                  </Command.Empty>
                  
                  <Command.Group heading="Navigation">
                    <Command.Item
                      onSelect={() => runCommand(() => router.push('/'))}
                      className="flex items-center gap-2 px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <HomeIcon className="w-4 h-4" />
                      Home
                    </Command.Item>
                    <Command.Item
                      onSelect={() => runCommand(() => router.push('/projects'))}
                      className="flex items-center gap-2 px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <FolderIcon className="w-4 h-4" />
                      Projects
                    </Command.Item>
                    <Command.Item
                      onSelect={() => runCommand(() => router.push('/about'))}
                      className="flex items-center gap-2 px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <UserIcon className="w-4 h-4" />
                      About
                    </Command.Item>
                    <Command.Item
                      onSelect={() => runCommand(() => router.push('/contact'))}
                      className="flex items-center gap-2 px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <EnvelopeIcon className="w-4 h-4" />
                      Contact
                    </Command.Item>
                  </Command.Group>

                  <Command.Group heading="Theme">
                    <Command.Item
                      onSelect={() => runCommand(() => setTheme('light'))}
                      className="flex items-center gap-2 px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <SunIcon className="w-4 h-4" />
                      Light Theme
                    </Command.Item>
                    <Command.Item
                      onSelect={() => runCommand(() => setTheme('dark'))}
                      className="flex items-center gap-2 px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <MoonIcon className="w-4 h-4" />
                      Dark Theme
                    </Command.Item>
                  </Command.Group>

                  <Command.Group heading="AI Assistant">
                    <Command.Item
                      onSelect={() => runCommand(() => setShowChat(true))}
                      className="flex items-center gap-2 px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <ChatBubbleLeftIcon className="w-4 h-4" />
                      Tanya Adna AI...
                    </Command.Item>
                  </Command.Group>

                  {projects.length > 0 && (
                    <Command.Group heading="Projects">
                      {projects.map((project) => (
                        <Command.Item
                          key={project.slug}
                          onSelect={() => runCommand(() => router.push(`/projects/${project.slug}`))}
                          className="flex items-center gap-2 px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <FolderIcon className="w-4 h-4" />
                          <div>
                            <div className="font-medium">{project.title}</div>
                            <div className="text-xs text-gray-500">{project.description}</div>
                          </div>
                        </Command.Item>
                      ))}
                    </Command.Group>
                  )}
                </Command.List>
              </Command>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Chat Modal */}
      <AIChat isOpen={showChat} onClose={() => setShowChat(false)} />
    </>
  );
}