import { StyleSheet } from "react-native";
import { ThemeColors } from '../../../utilis/colors';

export const settingStyle = (colors: ThemeColors) => StyleSheet.create({
  settingWrapper: {
    backgroundColor: colors.lightGray,
    marginTop : 20,
    marginHorizontal: 16,
    borderRadius: 12
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingStart: 16,
    paddingEnd: 40
  },

  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  settingTextContainer: {
    flex: 1,
  },

  settingTitle: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '400',
  },
  settingValue: {
    fontSize: 14,
    color: colors.darkGray,
    marginTop: 2,
  },

  arrow: {
    transform: [{ rotate: '0deg' }],
  },
  arrowUp: {
    transform: [{ rotate: '180deg' }],
  },

  dropdownContainer: {
    backgroundColor: colors.card,
    borderRadius: 14,
    marginHorizontal: 6
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 4,
    borderBottomColor: colors.white
  },
  optionText: {
    fontSize: 16,
    color: colors.black,
  },
  selectedOption: {
    color: colors.blue,
    fontWeight: '500',
  },
});
