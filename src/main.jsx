import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './router/Routes.jsx';
import '@fontsource/fira-code';

// const rootElement = document.getElementById('root');
// const root = ReactDOM.createRoot(rootElement);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>,
)

// if (rootElement?.hasChildNodes()) {
//   hydrateRoot(
//     rootElement,
//     <React.StrictMode>
//       <RouterProvider router={Routes} />
//     </React.StrictMode>
//   );
// } else {
//   root.render(
//     <React.StrictMode>
//       <RouterProvider router={Routes} />
//     </React.StrictMode>
//   )
// }