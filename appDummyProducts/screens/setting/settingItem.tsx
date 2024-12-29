import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { settingStyle } from "./styles/settingStyle";
import { useTheme } from "@react-navigation/native";
import { DarkThemeExtended, LightTheme } from "../../utilis/colors";
import { productDetailsStyle } from "../productDetails/styles/ProdoductDetailsScreenStyle";

interface SettingItemProps {
  title: string;
  value: string;
  icon: string;
  options: string[];
  onSelect?: (option: string) => void;
}

export const SettingItem: React.FC<SettingItemProps> = ({ 
  title, 
  value, 
  icon, 
  options, 
  onSelect 
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(value);

    const { dark } = useTheme();
    const colors = dark ? DarkThemeExtended.colors : LightTheme.colors;
    const styles = settingStyle(colors);
  
  
  const handleSelect = (option: string) => {
    setSelectedValue(option);
    onSelect?.(option);
    setIsOpen(false);
  };

  return (
    <View style={styles.settingWrapper}>
      <TouchableOpacity 
        style={styles.settingItem}
        onPress={() => setIsOpen(!isOpen)}
      >
        <View style={styles.settingLeft}>
          <View style={styles.iconContainer}>
            <Icon name={icon} size={24} color="#007AFF" />
          </View>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>{title}</Text>
            <Text style={styles.settingValue}>{selectedValue}</Text>
          </View>
        </View>
        <Icon 
          name="arrow-drop-down" 
          size={34} 
          color="#C7C7CC" 
          style={[styles.arrow, isOpen && styles.arrowUp]}
        />
      </TouchableOpacity>
      
      {isOpen && (
        <View style={styles.dropdownContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionItem}
              onPress={() => handleSelect(option)}
            >
              <Text style={[
                styles.optionText,
                selectedValue === option && styles.selectedOption
              ]}>
                {option}
              </Text>
              {selectedValue === option && (
                <Icon name="check" size={20} color="#007AFF" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};