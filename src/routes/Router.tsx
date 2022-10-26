import { Route, Routes } from "react-router-dom";

import { Base } from "template";

import { Home } from "pages";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Home />} />
        <Route path="/others" element={<h1>Others</h1>} />
      </Route>
    </Routes>
  );
}
