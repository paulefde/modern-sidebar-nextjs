import { Sidebar } from "@/components/sidebar/sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#6669bb]">
      <Sidebar />
      <div className="pl-24 pt-8 pr-8">
        <h1 className="text-white text-2xl font-medium">Welcome to Lampo</h1>
      </div>
    </main>
  );
}