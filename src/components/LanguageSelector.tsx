import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { BILINGUAL_PATHS, basePathOf, tamilPathOf } from "@/lib/langRoutes";

const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
    localStorage.setItem("language", value);

    // Pages with distinct per-language URLs (/x and /ta/x) navigate to the
    // matching variant; elsewhere only the in-app language changes.
    const basePath = basePathOf(location.pathname);
    if (BILINGUAL_PATHS.includes(basePath)) {
      navigate(value === "ta" ? tamilPathOf(basePath) : basePath);
    }
  };

  return (
    <Select value={i18n.language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-auto gap-2 bg-transparent border-muted/30 text-muted-foreground hover:text-secondary hover:border-secondary/50 transition-colors">
        <Globe className="w-4 h-4" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.nativeName}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
