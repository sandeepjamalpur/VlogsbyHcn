
export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  duration: string;
  url: string;
}

export interface Short {
  id: string;
  thumbnail: string;
  url: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}
