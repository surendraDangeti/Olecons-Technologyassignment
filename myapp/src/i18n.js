import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
       en: {
        translations: {
          "Place1": "Coorg",
          "State1": "State: Karnataka",
          "Time1": "Best Time to Visit: October - March",

          "Place2": "Wayanad",
          "State2": "State:Kerala",
          "Time2": "Best Time to Visit: October - May",

          "Place3": "Kodaikanal",
          "State3": "State: Tamilnadu",
          "Time3": "Best Time to Visit: October to June",

          "About": "We are passionate about travel and committed to sharing the world's wonders with you. More tourism content will be updated soon"

        }
      },
          hi: {
            translations: {
              "Place1": "कूर्ग",
              "State1": "राज्य: कर्नाटक",
              "Time1": "घूमने का सबसे अच्छा समय: अक्टूबर-मार्च",

              "Place2": "वायनाड",
              "State2": "राज्य: केरल",
              "Time2": "घूमने का सबसे अच्छा समय: अक्टूबर-मई ",

              "Place3": "कोडईकनाल",
              "State3": "राज्य:  तमिलनाडु",
              "Time3": "घूमने का सबसे अच्छा समय: अक्टूबर-जून ",

              "About":"हम यात्रा के शौकीन हैं और दुनिया के आश्चर्यों को आपके साथ साझा करने के लिए प्रतिबद्ध हैं। अधिक पर्यटन सामग्री जल्द ही अपडेट की जाएगी"
    
            }
          },

          tl: {
            translations: {
              "Place1": "కూర్గ్",
              "State1": "రాష్ట్రం: కర్ణాటక",
              "Time1": "సందర్శించడానికి ఉత్తమ సమయం: అక్టోబర్ - మార్చి",

              "Place2": "వాయనాడ్",
              "State2": "రాష్ట్రం: కేరళ",
              "Time2": "సందర్శించడానికి ఉత్తమ సమయం: అక్టోబర్ - మే",
    
              "Place3": "కొడైకెనాల్",
              "State3": "రాష్ట్రం: తమిళనాడు",
              "Time3": "సందర్శించడానికి ఉత్తమ సమయం: అక్టోబర్ - జూన్",

              "About":"మేము ప్రయాణం పట్ల మక్కువ కలిగి ఉన్నాము మరియు ప్రపంచంలోని అద్భుతాలను మీతో పంచుకోవడానికి కట్టుబడి ఉన్నాము. మరిన్ని టూరిజం కంటెంట్ త్వరలో అప్‌డేట్ చేయబడుతుంది"
            }
          }
       
      
      },

    fallbackLng: "en",
    debug: true,


    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
