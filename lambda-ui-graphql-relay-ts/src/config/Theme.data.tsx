const themeData = {
    light: {
        name: 'light',
        primaryColor: '#ffffff',
        secondaryColor: '#cccccc',
        // Agrega más propiedades para el tema de luz
    },
    dark: {
        name: 'dark',
        primaryColor: 'rgb(220, 248, 236)',
        secondaryColor: 'rgb(73, 169, 63)',
        // Agrega más propiedades para el tema oscuro
    },
    // Agrega más temas si es necesario
};

export type ThemeData = typeof themeData;
export default themeData;