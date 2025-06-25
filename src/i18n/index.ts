
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  vi: {
    translation: {
      title: "Tôi có thể làm gì cho bạn?",
      description: "Khám phá các prompt AI mạnh mẽ để tăng cường sáng tạo của bạn",
      searchPlaceholder: "Bạn có thể làm gì cho tôi",
      searchPlaceholder2: "Tạo hình ảnh đẹp cho tôi",
      searchPlaceholder3: "Viết nội dung sáng tạo",
      allCategories: "Tất cả",
      copy: "Sao chép",
      edit: "Chỉnh sửa",
      close: "Đóng",
      relatedPrompts: "Prompt liên quan",
      suggestions: "Gợi ý điều chỉnh",
      changeTone: "Thay đổi giọng điệu",
      changeAudience: "Thay đổi đối tượng",
      makeCreative: "Làm sáng tạo hơn",
      makeProfessional: "Làm chuyên nghiệp hơn",
      sponsored: "Được tài trợ"
    }
  },
  en: {
    translation: {
      title: "What can I do for you?",
      description: "Discover powerful AI prompts to enhance your creativity",
      searchPlaceholder: "What can you do for me",
      searchPlaceholder2: "Create beautiful images for me",
      searchPlaceholder3: "Write creative content",
      allCategories: "All",
      copy: "Copy",
      edit: "Edit",
      close: "Close",
      relatedPrompts: "Related prompts",
      suggestions: "Suggestion tweaks",
      changeTone: "Change tone",
      changeAudience: "Change audience",
      makeCreative: "Make more creative",
      makeProfessional: "Make more professional",
      sponsored: "Sponsored"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi', // default language
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
