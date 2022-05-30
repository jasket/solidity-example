/**
 * Level: App
 * Name: App
 * Slice: app configuration
 */
import { withHocs } from "./hocs";
import Pages from "pages";
import "./styles/index.css";

export const App = withHocs(() => <Pages />);
