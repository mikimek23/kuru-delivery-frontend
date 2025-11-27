import { Edit, FileText, Plus, Trash2 } from 'lucide-react';
import React from 'react'
export const BannerSection=()=> {
  const banners = [
    {
      id: 1,
      title: "Holiday Offer",
      text: "Save up to 20% on all deliveries",
      active: true,
      image: "/placeholder.jpg",
    },
    {
      id: 2,
      title: "New Service Area",
      text: "We now deliver nationwide",
      active: false,
      image: "/placeholder.jpg",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Banners</h2>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus size={18} /> Add Banner
        </button>
      </div>

      {/* List */}
      <div className="grid gap-6 md:grid-cols-2">
        {banners.map((b) => (
          <div
            key={b.id}
            className="bg-white border rounded-xl p-4 shadow-sm space-y-4"
          >
            <img
              src={b.image}
              alt="banner"
              className="w-full h-32 object-cover rounded-lg"
            />

            <h3 className="font-semibold">{b.title}</h3>
            <p className="text-gray-500 text-sm">{b.text}</p>

            <div className="flex items-center justify-between">
              <span
                className={`px-3 py-1 text-xs rounded-full ${
                  b.active
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {b.active ? "Active" : "Inactive"}
              </span>

              <div className="flex gap-3">
                <button className="p-2 rounded hover:bg-gray-100">
                  <Edit size={18} />
                </button>
                <button className="p-2 rounded hover:bg-gray-100 text-red-500">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export const StaticPagesSection=()=> {
  const pages = [
    { id: 1, title: "About Us" },
    { id: 2, title: "Terms & Conditions" },
    { id: 3, title: "Privacy Policy" },
    { id: 4, title: "Refund Policy" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Static Pages</h2>

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-5 py-3">Page Name</th>
              <th className="px-5 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {pages.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="px-5 py-4 flex items-center gap-3">
                  <FileText className="text-gray-500" size={18} />
                  {p.title}
                </td>
                <td className="px-5 py-4">
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Edit size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const  FAQSection=()=> {
  const faqs = [
    {
      id: 1,
      q: "How long does delivery take?",
      a: "It usually takes between 20–40 minutes.",
    },
    {
      id: 2,
      q: "Can I track my package?",
      a: "Yes, real-time tracking is supported.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">FAQs</h2>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus size={18} /> Add FAQ
        </button>
      </div>

      <div className="bg-white border rounded-xl shadow-sm p-5 space-y-4">
        {faqs.map((f) => (
          <div key={f.id} className="pb-4 border-b last:border-none">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{f.q}</h3>
              <button className="p-2 hover:bg-gray-100 rounded">
                <Edit size={18} />
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-1">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export const AnnouncementsSection=()=> {
  const announcements = [
    {
      id: 1,
      message: "Scheduled maintenance tonight at 10 PM.",
      active: true,
      type: "Warning",
    },
    {
      id: 2,
      message: "New promotional codes available this week!",
      active: false,
      type: "Info",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Announcements</h2>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus size={18} /> Add Announcement
        </button>
      </div>

      <div className="grid gap-4">
        {announcements.map((a) => (
          <div
            key={a.id}
            className="bg-white border rounded-xl shadow-sm p-4 flex items-center justify-between"
          >
            <div>
              <p className="font-medium">{a.message}</p>
              <span className="text-xs text-gray-500">{a.type}</span>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 text-xs rounded-full ${
                  a.active
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {a.active ? "Active" : "Inactive"}
              </span>

              <button className="p-2 hover:bg-gray-100 rounded">
                <Edit size={18} />
              </button>
              <button className="p-2 hover:bg-gray-100 text-red-500 rounded">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

