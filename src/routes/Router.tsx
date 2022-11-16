import { Route, Routes } from "react-router-dom";

import { Base } from "template";

import { Home, Repositories } from "pages";
import { IHeaderProps } from "components/Header/types";

export default function Router({ onToggleTheme, theme }: IHeaderProps) {
  return (
    <Routes>
      <Route
        path="/"
        element={<Base onToggleTheme={onToggleTheme} theme={theme} />}
      >
        <Route index element={<Home />} />
        <Route path="/:id" element={<Repositories />} />
      </Route>

      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}
