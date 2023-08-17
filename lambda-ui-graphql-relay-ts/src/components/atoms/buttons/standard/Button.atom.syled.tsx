import React from 'react';

/**
  interface ButtonStylesProps {
  // Props para personalizar los estilos
  isPrimary?: boolean;
  isDisabled?: boolean;
}
 */

/*
const ButtonStyles: React.FC<ButtonStylesProps> = ({ isPrimary = false, isDisabled = false }) => {
  // Definir estilos en línea basados en las props
  const buttonBackgroundColor = isPrimary ? 'blue' : 'rgb(220, 248, 236)';
  const buttonBorderColor = isPrimary ? 'yellow' : 'rgb(69, 95, 66)';
  const hoverBackgroundColor = isPrimary ? 'green' : 'rgb(171, 247, 218)';
  const hoverBorderColor = isPrimary ? 'orange' : 'rgb(73, 169, 63)';

  y el estilo 
    background-color: ${buttonBackgroundColor};

 */

const ButtonStyles: React.FC = () => (
  <style>{`
    .button {
      border-radius: 1em;
      border-style: solid;
      border-width: 0.12rem;
      height: 2rem;
      width: 100%;
      margin: 1rem;
      font-size: medium;
      box-sizing: border-box;
    }

    .button:hover {
    }
  `}</style>)

export default ButtonStyles;
