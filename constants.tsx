
import { Video, Short, Stat } from './types';

export const CHANNEL_URL = "https://www.youtube.com/@VlogsbyHCN";
export const INSTAGRAM_URL = "https://www.instagram.com/hcn_vlogs/";
export const WHATSAPP_URL = "https://wa.me/9182677742";
export const LOGO_URL = "./logo.png";
export const HERO_VIDEO_URL = "./intro_animation.mp4"; // The cinematic logo reveal video

export const FEATURED_VIDEOS: Video[] = [
  {
    id: "1",
    title: "The Ultimate Biryani Quest",
    thumbnail: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=800",
    views: "Viral",
    duration: "08:40",
    url: "https://www.youtube.com/@VlogsbyHCN"
  },
  {
    id: "2",
    title: "KFC Cinematic Wings",
    thumbnail: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800",
    views: "1.2M",
    duration: "00:58",
    url: "https://www.youtube.com/@VlogsbyHCN"
  },
  {
    id: "3",
    title: "Gourmet Burger Craft",
    thumbnail: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    views: "Trending",
    duration: "05:12",
    url: "https://www.youtube.com/@VlogsbyHCN"
  },
  {
    id: "4",
    title: "Sizzling Steakhouse Reveal",
    thumbnail: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    views: "New",
    duration: "00:59",
    url: "https://www.youtube.com/shorts/XlDyzRIItY4"
  }
];

export const SHORTS: Short[] = [
  { id: "s1", thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400", url: "https://www.youtube.com/@VlogsbyHCN/shorts" },
  { id: "s2", thumbnail: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=400", url: "https://www.youtube.com/@VlogsbyHCN/shorts" },
  { id: "s3", thumbnail: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=400", url: "https://www.youtube.com/@VlogsbyHCN/shorts" },
  { id: "s4", thumbnail: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400", url: "https://www.youtube.com/shorts/XlDyzRIItY4" },
  { id: "s5", thumbnail: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400", url: "https://www.youtube.com/@VlogsbyHCN/shorts" },
];

export const STATS: Stat[] = [
  { label: "Subscribers", value: "12.5K+", icon: "users" },
  { label: "Viral Reach", value: "3.6M+", icon: "eye" },
  { label: "Average Reach", value: "20K+", icon: "video" }
];
