import type { ReactElement } from "react";
import { TweetsContext } from "../contexts/TweetsContext";
import { useContext } from "react";
import { TweetsList } from "../components/TweetsList";
import { TweetForm } from "../components/TweetForm";
import { useDocumentTitle } from "../hooks/useDocumentTitle";


export const TweetsMasterPage = (): ReactElement => {
  useDocumentTitle("Accueil");
  const { tweets, addTweet, toggleLike } = useContext(TweetsContext)!;
  const rootTweets = tweets.filter((tweet) => tweet.parentId === undefined); //Garde uniquement les tweets racines, sans parentId
  const totalLikes = rootTweets.reduce((sum, tweet) => sum + tweet.likes, 0);

  return(
  <>
    <TweetForm onSubmit={addTweet} />
    <p>Total : {totalLikes} "J'aime"</p>

    <TweetsList tweets={rootTweets} onToggleLike={toggleLike}/>
  </>
  );
};