import { Pressable, Text } from 'react-native';

interface CustomButtonProps {
  text: string;
  type: 'Coral' | 'Turquioise' | 'Grey' | 'Gold';
  onPress: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}
const CustomButton: React.FC<CustomButtonProps> = ({ text, type, onPress, icon, disabled }) => {
  let backgroundColor;
  let textColor;
  switch (type) {
    case 'Coral':
      backgroundColor = 'bg-coral';
      textColor = 'text-white';
      break;
    case 'Turquioise':
      backgroundColor = 'bg-darkTurquoise';
      textColor = 'text-charcoal';
      break;
    case 'Grey':
      backgroundColor = 'bg-lighterGrey';
      textColor = 'text-white';
      break;
    case 'Gold':
      backgroundColor = 'bg-gold';
      textColor = 'text-charcoal';
      break;
  }
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      className={`flex-row ${backgroundColor} ${
        disabled && 'opacity-50'
      } px-5 py-2.5 rounded justify-center items-center my-2.5`}
    >
      {icon}
      <Text className={`${textColor} text-xl font-Bungee ${icon ? 'ml-2' : ''}`}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;