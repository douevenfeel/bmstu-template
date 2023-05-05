import 'app/styles/index.css';

import { StyledEngineProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app/App';

const container = document.getElementById('root');

if (!container) {
    throw new Error();
}

const root = createRoot(container);

root.render(
    <StrictMode>
        <StyledEngineProvider injectFirst>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StyledEngineProvider>
    </StrictMode>
);
