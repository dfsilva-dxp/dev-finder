import { Route, Routes } from "react-router-dom";

import { Base } from "template";

import { Home } from "pages";

interface IRouterProps {
  onToggleTheme: () => void;
}

export default function Router({ onToggleTheme }: IRouterProps) {
  return (
    <Routes>
      <Route path="/" element={<Base onToggleTheme={onToggleTheme} />}>
        <Route index element={<Home />} />
        <Route path="/others" element={<h1>Others</h1>} />
      </Route>
    </Routes>
  );
}
