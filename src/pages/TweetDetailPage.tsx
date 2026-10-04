import { useContext } from "react";
import { TweetsContext } from "../contexts/TweetsContext";
import type { ReactElement } from "react";
import { TweetsList } from "../components/TweetsList";
import { useParams, Link } from "react-router-dom";
import { TweetPreview } from "../components/TweetPreview";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const TweetDetailPage =(): ReactElement =>{
    const { tweets, toggleLike } = useContext(TweetsContext)!;
    const { id } = useParams<{ id: string }>();
    const tweet= tweets.find((t)=>t.id===id);
    const reponses= tweets.filter((t)=>t.parentId===id);
    const pageTitle = tweet === undefined ? "Tweet introuvable" : `Tweet de ${tweet.authorName}`; //hook inconditionnel(cour2:13)
    useDocumentTitle(pageTitle);


    if (tweet===undefined){    //Retour anticipé
        return(
            <div>
                <p>Ce tweet n'existe pas</p>
                <Link to="/">Retour à l'accueil</Link> 
            </div>
        )
    }
    return(
        <div>
            <TweetPreview tweet={tweet} linkToDetail={false} onToggleLike={toggleLike} />
            {reponses.length>0? (<TweetsList tweets={reponses} onToggleLike={toggleLike} />):(
            <p>Pas de réponse</p>
            )}
        </div>
    );
    


};


