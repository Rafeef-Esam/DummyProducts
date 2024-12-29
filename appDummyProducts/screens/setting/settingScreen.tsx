import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { I18nManager, View } from "react-native";
import { SettingItem } from "./settingItem";
import Restart from 'react-native-restart';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { languageConstants } from "../../loaclization/languageConsts";

const SettingScreen: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    const [preferences, setPreferences] = useState<{ language: string; theme: string }>({
        language: '',
        theme: '',
    });

    // Function to get current language display text
    const getLanguageDisplayText = (langCode: string | null) => {
        switch (langCode) {
            case 'en':
                return t(languageConstants.english);
            case 'ar':
                return t(languageConstants.arabic);
            default:
                return t(languageConstants.english);
        }
    };

    const getSavedPreferences = async () => {
        try {
            const savedLanguage = await AsyncStorage.getItem('language') || 'en';
            const savedTheme = await AsyncStorage.getItem('theme') || 'light';
            if (i18n.language !== savedLanguage) {
                await i18n.changeLanguage(savedLanguage);
            }
            I18nManager.forceRTL(savedLanguage === 'ar');
            setPreferences({
                language: getLanguageDisplayText(savedLanguage),
                theme: t(savedTheme),
            });
            setIsLoading(false);
        } catch (error) {
            console.error('Error loading preferences:', error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getSavedPreferences();
    }, [i18n.language]);

    const applyLanguage = async (language: string) => {
        try {
            const langCode = language === t(languageConstants.english) ? 'en' : 'ar';
            await AsyncStorage.setItem('language', langCode);

            if (langCode === 'ar') {
                I18nManager.allowRTL(true);
                I18nManager.forceRTL(true);
            } else {
                I18nManager.allowRTL(false);
                I18nManager.forceRTL(false);
            }

            await i18n.changeLanguage(langCode);
        } catch (error) {
            console.error('Error applying language:', error);
        }
    };

    // Handler for changing theme
    const handleThemeChange = async (newTheme: string) => {
        if (newTheme !== preferences.theme) {
            try {
                if (newTheme == t(languageConstants.dark)) {
                    AsyncStorage.setItem('theme', "dark");
                } else {
                    AsyncStorage.setItem('theme', "light");
                }
                setPreferences(prev => ({ ...prev, theme: newTheme }));
                Restart.Restart();
            } catch (error) {
                console.error('Error saving theme:', error);
            }
        }
    };

    // Handler for changing language
    const handleLanguageChange = async (newLanguage: string) => {
        if (newLanguage !== preferences.language) {
            try {
                applyLanguage(newLanguage);
                setPreferences(prev => ({ ...prev, language: newLanguage }));
                Restart.Restart();
            } catch (error) {
                console.error('Error changing language:', error);
            }
        }
    };

    if (isLoading) {
        return null; // Or a loading spinner
    }

    return (
        <View>
            <SettingItem
                title={t(languageConstants.theme)}
                value={preferences.theme}
                icon="brightness-medium"
                options={[t(languageConstants.light), t(languageConstants.dark)]}
                onSelect={handleThemeChange}
            />

            <SettingItem
                title={t(languageConstants.language)}
                value={preferences.language}
                icon="language"
                options={[t(languageConstants.english), t(languageConstants.arabic)]}
                onSelect={handleLanguageChange}
            />
        </View>
    );
};

export default SettingScreen;