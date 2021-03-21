# Estado global pre configurado para reactjs con redux-toolkit

> Nota: uso localforage por los beneficios que ofrece al manejar las 3 bases de datos del navegador en este orden
>
> #### IndexedDB (si el navegador lo soporta)
>
> #### WebSQL (si el navegador lo soporta)
>
> ##### LocalStorage
>
> Pero si no quieres usarlo, puedes usar el que ofrece redux-persist, aunque solo usa localStorage

## Librerías necesarias

```npm
npm i @reduxjs/toolkit react-redux localforage
```

## Si usas redux persist

```npm
npm i @reduxjs/toolkit react-redux redux-persist localforage
```

## Como usar

#### App.jsx

```jsx
import { StoreProvider } from "path/store";

export default function App() {
  // ...
  return <StoreProvider>Resto de tu aplicación</StoreProvider>;
}
```

#### Componente.jsx

```jsx
import { getTheme } from "path/store";
import { useSelector, useDispatch } from "react-redux";

export default function Componente() {
  const theme = useSelector(getTheme);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(setTheme(!theme));

  // Ejemplo con trunks
  const handleClickWithTrunks = () =>
    dispatch(setTheme(!theme))
      .then(() => {})
      .catch((e) => console.log(e));

  return (
    <button
      style={{ backgroundColor: theme ? "#333" : "#ddd" }}
      onClick={handleCLick}
    >
      Cambiar tema
    </button>
  );
}
```

En State.js solo añadir propiedades nuevas en el objeto initialState

En Getters.js añadir los getters para cada propiedad del estado que necesite un getter, deje un getter de ejemplo

En Slice.js solo añadir funciones setters en el objeto reducers y añadirla al export que hay al final del archivo(solo las de reducers, las de extraReducers, si usas trunks, no hace faltan), deje un setter de ejemplo

Si usas trunks sin redux persist deje un ejemplo básico del manejo de una propiedad isDBLoaded del estado para verificar cuando se haya cargado todos los datos.
La documentación de trunks con redux-toolkit esta [aquí](https://redux-toolkit.js.org/api/createAsyncThunk)
