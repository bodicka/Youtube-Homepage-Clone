import { useState } from "react";
import CategoryPills from "./Components/CategoryPills";
import PageHeader from "./Components/PageHeader";
import { category, videos } from "./dataProgect/data";
import VideoGridItem from "./Components/VideoGridItem";
import { Sidebar } from "../src/Components/SideBar";
import { SidebarProvider } from "../src/context/ContextSidebar";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(category[0]);
  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar />
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="staticy top-0 bg-white z-10 pb-4">
              <CategoryPills
                category={category}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {videos.map((v) => (
                <VideoGridItem key={v.id} {...v} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default App;
