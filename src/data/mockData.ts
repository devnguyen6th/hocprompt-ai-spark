
export interface Prompt {
  id: string;
  title: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  prompt: {
    vi: string;
    en: string;
  };
  tags: string[];
  category: string;
  imageUrl: string;
  videoUrl?: string;
  isAd?: boolean;
  adUrl?: string;
}

export interface AITool {
  id: string;
  name: string;
  icon: string;
}

export const aiTools: AITool[] = [
  { id: 'all', name: 'Tất cả', icon: '🌟' },
  { id: 'midjourney', name: 'Midjourney', icon: '🎨' },
  { id: 'dalle', name: 'DALL-E', icon: '🖼️' },
  { id: 'stable-diffusion', name: 'Stable Diffusion', icon: '🎭' },
  { id: 'leonardo', name: 'Leonardo AI', icon: '🖌️' },
  { id: 'firefly', name: 'Adobe Firefly', icon: '🔥' }
];

export const prompts: Prompt[] = [
  {
    id: '1',
    title: {
      vi: 'Chân dung nghệ thuật siêu thực',
      en: 'Surreal Art Portrait'
    },
    description: {
      vi: 'Tạo chân dung nghệ thuật với phong cách siêu thực đầy màu sắc',
      en: 'Create artistic portraits with colorful surreal style'
    },
    prompt: {
      vi: 'Chân dung một người phụ nữ trẻ, phong cách nghệ thuật siêu thực, màu sắc rực rỡ, tóc bay trong gió như những dải silk, mắt long lanh như ngọc trai, nền background dreamy với những đám mây pastel',
      en: 'Portrait of a young woman, surreal art style, vibrant colors, hair flowing like silk ribbons, eyes sparkling like pearls, dreamy background with pastel clouds'
    },
    tags: ['portrait', 'surreal', 'colorful'],
    category: 'midjourney',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    title: {
      vi: 'Phong cảnh thiên nhiên tuyệt đẹp',
      en: 'Stunning Nature Landscape'
    },
    description: {
      vi: 'Khám phá vẻ đẹp tự nhiên qua ống kính AI',
      en: 'Explore natural beauty through AI lens'
    },
    prompt: {
      vi: 'Phong cảnh núi non hùng vĩ lúc bình minh, ánh sáng golden hour chiếu rọi, có thác nước đổ xuống, cây cối xanh tươi, trời trong xanh với vài đám mây trắng, phong cách nhiếp ảnh chuyên nghiệp',
      en: 'Majestic mountain landscape at dawn, golden hour lighting, waterfall cascading down, lush green trees, clear blue sky with white clouds, professional photography style'
    },
    tags: ['landscape', 'nature', 'mountain'],
    category: 'dalle',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    videoUrl: 'sample-video.mp4'
  },
  {
    id: 'ad-1',
    title: {
      vi: 'Khóa học AI miễn phí - Học ngay!',
      en: 'Free AI Course - Learn Now!'
    },
    description: {
      vi: 'Tham gia khóa học AI miễn phí và trở thành chuyên gia',
      en: 'Join free AI course and become an expert'
    },
    prompt: {
      vi: 'Khóa học AI toàn diện từ cơ bản đến nâng cao, được thiết kế bởi các chuyên gia hàng đầu...',
      en: 'Comprehensive AI course from basics to advanced, designed by top experts...'
    },
    tags: ['education', 'free', 'ai'],
    category: 'midjourney',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
    isAd: true,
    adUrl: 'https://example.com/ai-course'
  },
  {
    id: '3',
    title: {
      vi: 'Kiến trúc futuristic',
      en: 'Futuristic Architecture'
    },
    description: {
      vi: 'Thiết kế kiến trúc tương lai với công nghệ AI',
      en: 'Design futuristic architecture with AI technology'
    },
    prompt: {
      vi: 'Tòa nhà chọc trời futuristic với thiết kế organic, bề mặt glass reflective, có vertical garden, lighting LED tích hợp, phong cách kiến trúc Zaha Hadid, render 3D photorealistic',
      en: 'Futuristic skyscraper with organic design, reflective glass surfaces, vertical gardens, integrated LED lighting, Zaha Hadid architectural style, photorealistic 3D render'
    },
    tags: ['architecture', 'futuristic', 'building'],
    category: 'stable-diffusion',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    title: {
      vi: 'Character anime đẹp',
      en: 'Beautiful Anime Character'
    },
    description: {
      vi: 'Tạo nhân vật anime với phong cách Nhật Bản',
      en: 'Create anime characters with Japanese style'
    },
    prompt: {
      vi: 'Cô gái anime dễ thương, mắt to màu xanh dương, tóc hồng dài, đang mặc kimono truyền thống, background là vườn hoa anh đào, phong cách Studio Ghibli, soft lighting',
      en: 'Cute anime girl, big blue eyes, long pink hair, wearing traditional kimono, cherry blossom garden background, Studio Ghibli style, soft lighting'
    },
    tags: ['anime', 'character', 'cute'],
    category: 'leonardo',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop'
  },
  {
    id: '5',
    title: {
      vi: 'Logo công ty sáng tạo',
      en: 'Creative Company Logo'
    },
    description: {
      vi: 'Thiết kế logo chuyên nghiệp cho doanh nghiệp',
      en: 'Design professional logos for businesses'
    },
    prompt: {
      vi: 'Logo công ty công nghệ, thiết kế minimalist, sử dụng gradient xanh và tím, icon geometric abstract, typography hiện đại, vector style, background trắng',
      en: 'Tech company logo, minimalist design, blue and purple gradient, abstract geometric icon, modern typography, vector style, white background'
    },
    tags: ['logo', 'business', 'minimal'],
    category: 'firefly',
    imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop'
  },
  {
    id: 'ad-2',
    title: {
      vi: 'Tool AI viết content tự động',
      en: 'AI Content Writing Tool'
    },
    description: {
      vi: 'Tạo nội dung chất lượng cao chỉ với 1 click',
      en: 'Create high-quality content with just 1 click'
    },
    prompt: {
      vi: 'Công cụ AI viết content tự động, giúp bạn tạo ra hàng trăm bài viết chất lượng...',
      en: 'AI content writing tool that helps you create hundreds of quality articles...'
    },
    tags: ['ai-tool', 'content', 'writing'],
    category: 'dalle',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
    isAd: true,
    adUrl: 'https://example.com/content-tool'
  }
  // Adding more prompts...
];

// Add more prompts to reach 20 total
for (let i = 6; i <= 20; i++) {
  const categories = ['midjourney', 'dalle', 'stable-diffusion', 'leonardo', 'firefly'];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  
  prompts.push({
    id: i.toString(),
    title: {
      vi: `Prompt sáng tạo ${i}`,
      en: `Creative Prompt ${i}`
    },
    description: {
      vi: `Mô tả chi tiết cho prompt thú vị số ${i}`,
      en: `Detailed description for interesting prompt ${i}`
    },
    prompt: {
      vi: `Nội dung prompt tiếng Việt số ${i} với nhiều chi tiết thú vị và sáng tạo...`,
      en: `English prompt content ${i} with many interesting and creative details...`
    },
    tags: ['creative', 'ai', 'art'],
    category: randomCategory,
    imageUrl: `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&random=${i}`
  });
}

// Add third ad
prompts.push({
  id: 'ad-3',
  title: {
    vi: 'Phần mềm thiết kế AI Pro',
    en: 'AI Design Software Pro'
  },
  description: {
    vi: 'Trở thành designer chuyên nghiệp với AI',
    en: 'Become a professional designer with AI'
  },
  prompt: {
    vi: 'Phần mềm thiết kế AI chuyên nghiệp, tích hợp đầy đủ tính năng...',
    en: 'Professional AI design software with full features...'
  },
  tags: ['design', 'ai-software', 'pro'],
  category: 'leonardo',
  imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
  isAd: true,
  adUrl: 'https://example.com/design-software'
});
