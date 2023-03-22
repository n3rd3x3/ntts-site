/**
 * @typedef {"en-US"} DefaultLocale
 * @typedef {DefaultLocale | "zh-CN" | "es-ES" | "pt-BR" | "ja" | "ko" | "ru"} Locale
 */

/** @type {Readonly<Record<Locale, string>>} */
export const languageMap = {
  "en-US": "English",
};

/** @type {Readonly<Record<Locale, string>>} */
export const titleMap = {
  "en-US": "No Text To Speech",
};

/** @type {Readonly<Record<Locale, {lightweight:string;realtime?:string;suspense?:string;pagination?:string;backendAgnostic?:string;renderingStrategies?:string;typescript?:string;remoteLocal?:string;}>>} */
export const featuresMap = {
  "en-US": {
    mail: "Email",
    rules: "Rules",
    discord: "Discord",
    yt: "YouTube",
  },
};

/** @type {Readonly<Record<Locale, string>>} */
export const headDescriptionMap = {
  "en-US":
    "No Text To Speech website.",
};

/** @type {Readonly<Record<Locale, string>>} */
export const feedbackLinkMap = {
  "en-US": "Question? Give us feedback →",
  "es-ES": "¿Dudas? Danos tu feedback →",
  "pt-BR": "Dúvidas? Nos dê feedback →",
  "zh-CN": "有疑问？给我们反馈 →",
  ko: "질문이 있으신가요? 피드백을 남겨주세요 →",
  ru: "Вопросы? Оставьте нам отзыв →",
};

/** @type {Readonly<Record<Locale, string>>} */
export const editTextMap = {
  "en-US": "Edit this page on GitHub →",
  "es-ES": "Edite esta página en GitHub →",
  "pt-BR": "Edite essa página no GitHub →",
  "zh-CN": "在 GitHub 上编辑本页 →",
  ja: "Github で編集する →",
  ko: "Github에서 이 페이지 편집하기 →",
  ru: "Редактировать эту страницу на GitHub →",
};

/** @type {Readonly<Record<Locale, { utmSource: string; text: string; suffix?: string | undefined }>>} */
export const footerTextMap = {
  "en-US": { utmSource: "site", text: "" },
};

/** @type {Readonly<Record<Locale, string>>} */
export const tableOfContentsTitleMap = {
  "en-US": "On This Page",
  "es-ES": "En esta página",
  "pt-BR": "Nessa página",
  ru: "На этой странице",
};

/** @type {Readonly<Record<Locale, string>>} */
export const searchPlaceholderMap = {
  "en-US": "Search page...",
  "es-ES": "Buscar documento...",
  "pt-BR": "Buscar documentação...",
  ko: "문서 검색...",
  ru: "Искать в документации...",
};