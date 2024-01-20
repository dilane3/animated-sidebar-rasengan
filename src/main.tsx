import "./styles/index.css";
import "@rasenganjs/image/lib/styles/index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { type AppProps } from "rasengan";
import AppRouter from "./pages/app.router";

export default function App({ Component }: AppProps) {
  return <Component router={AppRouter} />;
}
