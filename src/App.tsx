import { tweets as initialTweets } from "./data/tweets";
import type { Tweet } from "./types/Tweet";
import type { ReactElement } from "react";
import { useState } from "react";

import { Link, Outlet } from "react-router-dom";
import { TweetsContext, type TweetsContextValue  } from "./contexts/TweetsContext";


export const App = (): ReactElement => {
  const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets);

const addTweet = (content: string): void => {
  const nouveauTweet: Tweet = {
    id: crypto.randomUUID(),
    authorName: "Vous",
    authorHandle: "vous",
    content: content,
    createdAt: new Date().toISOString(),
    likes: 0,
    likedByMe: false,
  };
  
  //setTweets = il faut lui passer une fonction qui reçoit l'état précédent 
  setTweets((etatPrecedent) => [nouveauTweet, ...etatPrecedent ]);
};


const toggleLike = (id: string): void => {
 setTweets((previousTweets) =>
    previousTweets.map((tweet) =>
      tweet.id === id
        ? {
            ...tweet, //crée une copie avec ce spread
            likedByMe: !tweet.likedByMe,// on inverse le booléen
            likes: tweet.likedByMe ? tweet.likes - 1 : tweet.likes + 1, // ancien likedByMe = true → on retire 1 et si false +1
          }
        : tweet,
    ),
  );

};

  const context: TweetsContextValue = { tweets, addTweet, toggleLike };
  
  return(
  <TweetsContext.Provider value={context}>

  <main>
    <header>
    <img src="/xyz.png" alt="Logotype de XYZ" />
    <h1>XYZ</h1>
     <Link to="/">Accueil</Link>
    </header>
    <Outlet />
  </main> 
  </TweetsContext.Provider>
  );
};

