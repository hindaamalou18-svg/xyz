//import './App.css'
import type { ReactElement } from "react";
import { tweets } from "./data/tweets";
import { TweetsList } from "./components/TweetsList";

export const App = (): ReactElement => (
  <main>
    <h1>XYZ</h1>
    <TweetsList tweets={tweets} />
  </main>
);
