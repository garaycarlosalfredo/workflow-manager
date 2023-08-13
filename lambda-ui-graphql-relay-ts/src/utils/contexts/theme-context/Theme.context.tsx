// ThemeContext.tsx
import { createContext } from 'react';
import { ThemeData } from '../../../config/Theme.data';

const ThemeContext = createContext<ThemeData | undefined>(undefined);

export default ThemeContext;
