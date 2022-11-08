import { Route, Routes } from "react-router-dom";

import { Base } from "template";

import { Home } from "pages";

interface IRouterProps {
  onToggleTheme: () => void;
  theme: string;
}

export default function Router({ onToggleTheme, theme }: IRouterProps) {
  return (
    <Routes>
      <Route
        path="/"
        element={<Base onToggleTheme={onToggleTheme} theme={theme} />}
      >
        <Route index element={<Home />} />
        <Route path="/:id" element={<h1>Others</h1>} />
      </Route>

      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}
