 import type { ReactElement } from "react";
import type { Tweet } from "../types/Tweet";
import { useState } from "react";

type TweetPreviewProps= {
    tweet: Tweet;
};



export const TweetPreview=({tweet}:TweetPreviewProps ): ReactElement =>{
    const [isExpanded, setIsExpanded] = useState<boolean>(false); //le tweet est-il déplié ?
    const isLong = tweet.content.length > 180;
    const visibleContent = //Le contenu à afficher
    isLong && !isExpanded  //si long et pas déplié(pas ouvert)
      ? `${tweet.content.slice(0, 180)}...` //Donc tronqué
      : tweet.content; //Sinon il est complet 

  return ( //On affiche


    <article>
    <strong> {tweet.authorName} </strong>
    <span> @{tweet.authorHandle} </span>
    <time dateTime={tweet.createdAt}>
    {new Date(tweet.createdAt).toLocaleDateString("fr-FR")}
    </time>
    <br />
        {tweet.image!==undefined && (
        <img className="tweet-image" 
        src={tweet.image.url}
        alt={tweet.image.alt}/>
    )}

     <p>{visibleContent}</p>
    {isLong && (
  <button
    type="button"
    onClick={() => setIsExpanded((previous) => !previous)} // inverser l'état au clic (ouvert/fermé)
  >
    {isExpanded ? "Voir moins" : "Voir plus"}   
      </button>
)}
    </article>

);
};