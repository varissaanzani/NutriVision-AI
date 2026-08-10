import Sidebar from './Sidebar';
import TopNavBar from './TopNavBar';
import BottomNavBar from './BottomNavBar';

export default function Layout({ title, children }) {
  return (
    <div className="flex min-h-screen bg-background text-on-background">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-sidebar-width min-h-screen bg-background">
        <TopNavBar title={title} />
        <div className="pt-24 px-md md:px-lg pb-3xl max-w-container-max mx-auto space-y-gutter">
          {children}
        </div>
      </main>
      <BottomNavBar />
    </div>
  );
}
