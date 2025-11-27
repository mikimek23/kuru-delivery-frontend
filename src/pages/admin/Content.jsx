import React, { useState } from "react";
import { AnnouncementsSection, BannerSection, FAQSection, StaticPagesSection } from "../../components/admin/ContentEditor";

export const Content =()=> {
  const [activeTab, setActiveTab] = useState("banners");

  const tabs = [
    { id: "banners", label: "Banners" },
    { id: "static", label: "Static Pages" },
    { id: "faq", label: "FAQs" },
    { id: "announcements", label: "Announcements" },
  ];

  return (
    <div className="min-h-screen space-y-8 ml-16">

      
      <div>
        <h1 className="text-2xl font-bold">Content Management</h1>
        <p className="text-gray-500 mt-1">
          Manage app banners, pages, FAQs, and announcements.
        </p>
      </div>

      
      <div className="flex gap-3 border-b pb-2 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition capitalize
              ${
                activeTab === t.id
                  ? "bg-orange-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      
      {activeTab === "banners" && <BannerSection />}
      {activeTab === "static" && <StaticPagesSection />}
      {activeTab === "faq" && <FAQSection />}
      {activeTab === "announcements" && <AnnouncementsSection />}
    </div>
  );
}
