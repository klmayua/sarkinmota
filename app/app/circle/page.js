"use client";

import { useState } from "react";
import Image from "next/image";

// Mock Database of Community Feed
const initialPosts = [
  {
    id: "p1",
    author: {
      name: "Aliyu Mohammad",
      username: "alamin_sarkinmota",
      avatar: "/static/brand-logo-light.webp",
      badge: "Founder"
    },
    content: "Excited to announce that our second Xiaomi YU7 unit has arrived at our Abuja showroom! Pure electric luxury. Who wants a test drive this weekend? ⚡",
    img: "/static/carousel/xaiomi-yu7-blue.png",
    likes: 42,
    hasLiked: false,
    comments: [
      { author: "kabir_abu", text: "Congratulations Boss! Absolute beast of a ride." },
      { author: "musa_yola", text: "Representing Yola well! More success." }
    ],
    timestamp: "2 hours ago"
  },
  {
    id: "p2",
    author: {
      name: "Kabir Abubakar",
      username: "kabir_abu",
      avatar: "/static/carousel/mercedes-amg-gle-63.jpg",
      badge: "Elite Member"
    },
    content: "Just finished ceramic coating detailing on my GLE 53 via SafiMota care. Correct job, the shine is blinding! Highly recommend Abuja detailing centers. ⭐⭐⭐⭐⭐",
    img: null,
    likes: 18,
    hasLiked: false,
    comments: [
      { author: "alamin_sarkinmota", text: "Correct one My Bratha! We keep the rides clean." }
    ],
    timestamp: "5 hours ago"
  }
];

export default function CarCircle() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPostText, setNewPostText] = useState("");
  const [activeTab, setActiveTab] = useState("FEED");

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    const newPost = {
      id: `p-${Date.now()}`,
      author: {
        name: "Abuja Car Fan",
        username: "abuja_fan_99",
        avatar: "/static/mybratha.svg",
        badge: "Member"
      },
      content: newPostText,
      img: null,
      likes: 0,
      hasLiked: false,
      comments: [],
      timestamp: "Just now"
    };

    setPosts((prev) => [newPost, ...prev]);
    setNewPostText("");
  };

  const handleLike = (postId) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            likes: post.hasLiked ? post.likes - 1 : post.likes + 1,
            hasLiked: !post.hasLiked
          };
        }
        return post;
      })
    );
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      {/* Navigation */}
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <span className="text-gold">Owner Circle</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-white/10 pb-6 mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-wide">Car Owner Circle</h1>
          <p className="text-sm text-text-muted mt-2">Connecting luxury car owners, collectors, and fans in Nigeria.</p>
        </div>
      </div>

      {/* Layout Split */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
        {/* Main Feed Column */}
        <div className="space-y-8">
          {/* Post Creation Box */}
          <form onSubmit={handleCreatePost} className="bg-panel border border-white/10 rounded-md p-6 space-y-4 shadow-xl">
            <div className="flex gap-4 items-start">
              <div className="relative size-10 rounded-full border border-gold/30 bg-black overflow-hidden flex-shrink-0">
                <Image src="/static/mybratha.svg" alt="Avatar" fill className="object-contain" />
              </div>
              <textarea
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
                placeholder="What's happening in your garage today, My Bratha?"
                rows={3}
                className="flex-1 bg-black border border-white/10 rounded px-4 py-3 text-sm focus:border-gold outline-none resize-none text-white"
              />
            </div>
            <div className="flex justify-end pt-2 border-t border-white/5">
              <button
                type="submit"
                className="px-6 py-2 bg-gold text-black rounded text-xs uppercase font-semibold hover:bg-gold-glow font-heading tracking-wider"
              >
                Share to Circle
              </button>
            </div>
          </form>

          {/* Social Feed List */}
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-panel border border-white/10 rounded-md p-6 space-y-4 shadow-xl">
                {/* Post Header */}
                <div className="flex justify-between items-start">
                  <div className="flex gap-3 items-center">
                    <div className="relative size-10 rounded-full border border-gold/20 bg-black overflow-hidden flex-shrink-0">
                      <Image src={post.author.avatar} alt={post.author.name} fill className="object-contain" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm uppercase tracking-tight flex items-center gap-2">
                        {post.author.name}
                        <span className="text-[10px] bg-gold/15 text-gold px-2 py-0.5 rounded font-normal lowercase tracking-normal">
                          {post.author.badge}
                        </span>
                      </h3>
                      <span className="text-xs text-text-muted">@{post.author.username} • {post.timestamp}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <p className="text-sm leading-relaxed text-white/95">{post.content}</p>

                {/* Optional Image */}
                {post.img && (
                  <div className="relative aspect-video w-full border border-white/5 rounded-md overflow-hidden bg-black">
                    <Image src={post.img} alt="Post image" fill className="object-cover object-bottom" />
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center gap-6 pt-3 border-t border-white/5 text-xs text-text-muted">
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-1.5 hover:text-gold transition-colors ${post.hasLiked ? "text-gold font-bold" : ""}`}
                  >
                    <span>{post.hasLiked ? "❤️" : "🖤"}</span>
                    <span>{post.likes} Likes</span>
                  </button>
                  <span className="cursor-default">💬 {post.comments.length} Comments</span>
                </div>

                {/* Comments List */}
                {post.comments.length > 0 && (
                  <div className="bg-black/30 border border-white/5 rounded p-4 space-y-3">
                    {post.comments.map((comm, cIdx) => (
                      <div key={cIdx} className="text-xs space-y-1">
                        <span className="font-bold text-white block">@{comm.author}</span>
                        <p className="text-text-muted leading-relaxed">{comm.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="space-y-6 h-fit lg:sticky lg:top-[120px]">
          {/* Section 1: Clubs Registry */}
          <div className="bg-panel border border-white/10 rounded-md p-6 space-y-4 shadow-xl">
            <h3 className="text-xs uppercase tracking-widest text-gold font-bold border-b border-white/10 pb-2">
              Supercar Clubs
            </h3>
            <div className="space-y-3 text-xs">
              <a href="/clubs" className="block p-3 bg-black hover:border-gold/30 border border-white/5 rounded transition-all">
                <span className="font-bold text-white block">Abuja Supercar Circle</span>
                <span className="text-text-muted">Abuja's exclusive luxury owners subgroup.</span>
              </a>
              <a href="/clubs" className="block p-3 bg-black hover:border-gold/30 border border-white/5 rounded transition-all">
                <span className="font-bold text-white block">Tokunbo EV Alliance</span>
                <span className="text-text-muted">Electric vehicle owners and clearing experts.</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
