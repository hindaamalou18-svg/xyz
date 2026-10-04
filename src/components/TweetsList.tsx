import type { Tweet } from "../types/Tweet"
import { TweetPreview } from "./TweetPreview";
import type { ReactElement } from "react";

export type TweetsListProps={
tweets: Array<Tweet>
onToggleLike: (id: string) => void;

};

export const TweetsList= ({ tweets, onToggleLike }: TweetsListProps): ReactElement=>(
    <section>
        {tweets.map((tweet)=> (
            <TweetPreview key={tweet.id} tweet={tweet} onToggleLike={onToggleLike} />
        ))}
        

    </section>
)