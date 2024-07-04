import React from 'react';
import { AlertLabelCss, IconAlertCss } from '../../styles/Utils/alertLabelCss'; // Ajusta la ruta según la estructura de tu proyecto
import iconAlert from '../../images/utils/bale.png';
interface AlertLabelProps {

  text: string;
}

const AlertLabel: React.FC<AlertLabelProps> = ({ text }) => {
  return (
    <AlertLabelCss>
      <IconAlertCss src={iconAlert} alt="Alert Icon" />
      {text}
    </AlertLabelCss>
  );
};

export default AlertLabel;
