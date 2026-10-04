import  { useState } from "react";
import type { SubmitEvent,  ReactElement } from "react";

type TweetFormProps = {
 onSubmit: (title: string) => void;
};

const CONTENT_MAX_LENGTH = 280;

export const TweetForm = ({ onSubmit }: TweetFormProps): ReactElement => {
const [content, setContent] = useState<string>("");

const remainingCharacters = CONTENT_MAX_LENGTH - content.length;
const normalizedContent: string = content.trim();
const isValid = normalizedContent.length > 0 && remainingCharacters >= 0;

const handleSubmit = (event: SubmitEvent<HTMLFormElement>): void => {
    event.preventDefault();
  

    if (!isValid) {
      return;
    }
    
    onSubmit(normalizedContent);
    setContent("");
  };

 return (
    <form onSubmit={handleSubmit}>
    <textarea
      value={content}
      onChange={(event) => setContent(event.target.value)}
    />
     <p>{remainingCharacters} caractères restants</p>
     <button type="submit" disabled={!isValid}>
      Ajouter
     </button>

    </form>
  );
};