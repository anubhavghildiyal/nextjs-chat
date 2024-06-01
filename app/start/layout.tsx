import { SidebarDesktop } from '@/components/sidebar-desktop';
import { GithubUrlProvider } from '@/lib/hooks/use-github-url';

interface StartLayoutProps {
  children: React.ReactNode;
}

export default async function StartLayout({ children }: StartLayoutProps) {
  return (
    <GithubUrlProvider>
      <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden">
        <SidebarDesktop />
        {children}
      </div>
    </GithubUrlProvider>
  );
}
