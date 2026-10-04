import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TweetsMasterPage } from "./pages/TweetsMasterPage";
import { TweetDetailPage } from "./pages/TweetDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<TweetsMasterPage />} />
          <Route path="tweets/:id" element={<TweetDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

