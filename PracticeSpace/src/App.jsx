import { useState } from "react";
import "./App.css";
import PageLayOut from "./PageLayout";

export default function App() {
  const movieTitle = "쿵푸팬더";
  return <PageLayOut title={movieTitle} />;
}
