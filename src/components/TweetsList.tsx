import type { Tweet } from "../types/Tweet"
import { TweetPreview } from "./TweetPreview";
import type { ReactElement } from "react";

export type TweetsListProps={
tweets: Array<Tweet>
};

export const TweetsList= ({ tweets }: TweetsListProps): ReactElement=>(
    <section>
        {tweets.map((tweet)=> (
            <TweetPreview key={tweet.id} tweet={tweet} />
        ))}
        

    </section>
)