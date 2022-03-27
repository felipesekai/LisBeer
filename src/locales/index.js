import { Platform, NativeModules} from "react-native";
import I18n from 'i18n-js';
import en from './en-US';
import pt from './pt-BR';

const normalizeTranslate = {
    'en-US': 'en-US',
    'en': 'en-US',
    'pt-BR': 'pt-BR',
    'pt-US': 'pt-BR',
}

const getLanguageByDevices = ()=> {
    return Platform.OS === 'ios' ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier

}

I18n.translations = {
    'en_US': en,
    'pt_BR': pt, 
}

const setLanguage = () => {
    const language = getLanguageByDevices()
    const translateNormalize = normalizeTranslate[language]
    const haveLanguage = I18n.translations.hasOwnProperty(translateNormalize)

    haveLanguage? I18n.locale = translateNormalize : I18n.defaultLocale = 'pt-BR'
}

setLanguage()
 
export default translate = key => I18n.t(key)