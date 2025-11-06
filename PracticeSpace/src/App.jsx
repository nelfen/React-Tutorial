import { useState } from "react";
import "./App.css";
import PageLayOut from "./PageLayout";

export default function App() {
  const movieTitle = "고질라 X 콩";
  return <PageLayOut title={movieTitle} />;
}
