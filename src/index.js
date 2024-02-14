import React from "react";
import ReactDOM from 'react-dom';
import { ContextProvider } from './contexts/ContextProvider.js';
import './index.css';
import App from './App';
import { registerLicense} from "@syncfusion/ej2/base.js";

registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF5cWWJCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWX5dcXRVQ2RdV0dyWEs=');

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>, 
  document.getElementById('root')
);
