import type { Tweet } from "../types/Tweet";

export const tweets: Array<Tweet>= [
    {
    id: "1",
    authorName: "Ada Lovelace",
    authorHandle: "ada",
    content: "La machine analytique n'a nullement la prétention de créer quoi que ce soit. Elle peut exécuter tout ce que nous savons lui ordonner d'exécuter.",
    image:{
        url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/500px-Ada_Lovelace_portrait.jpg",
        alt:  "Portrait d'Ada Lovelace",
        },  
    createdAt: "2026-09-01T11:12:00.000Z",
  },
    {
    id: "2",
    authorName: "Tim Berners-lee",
    authorHandle: "timbl",
    content: "La puissance d'un lien hypertexte tient a ce que tout doit pouvoir être relié à tout. Cela exige que toute chose puisse être publiée sur le Web.",
    createdAt: "2026-07-06T22:00:00.000Z",
  },
    {
    id: "3",
    authorName: "Linus Torvalds",
    authorHandle: "torvalds",
    content: "Je pouvais faire mieux en deux semaines, et c'est ce que j'ai fait.",
    createdAt: "2026-07-06T12:10:00.000Z",
  },
    {
    id: "4",
    authorName: "John von Neumann",
    authorHandle: "jvonneumann",
    content: "Le seul fait certain est que les difficultés proviennent d'une évolution qui, bien qu'utile et constructive, est également dangereuse.",
    createdAt: "2026-07-05T15:05:00.000Z",
  },
    {
    id: "5",
    authorName: "Radia Perlman",
    authorHandle: "rperlman",
    content: "L'algorithme de l'arbre couvrant etait un bricolage que je considerais comme une mauvaise idee.",
    createdAt: "2026-07-05T09:40:00.000Z",
  },
    {
    id: "6",
    authorName: "Donald Knuth",
    authorHandle: "dknuth",
    content: "Nous devrions oublier les petits gains d'efficacité, environ 97 % du temps : l'optimisation prematuree est la racine de tous les maux. Pourtant, nous ne devons pas laisser passer les occasions qui se présentent dans ces 3% décisifs ",
    createdAt: "2026-07-04T20:15:00.000Z",
  },
    {
    id: "7",
    authorName: "Barbara Liskov",
    authorHandle: "bliskov",
    content: "J'ai eu l'idée de l'abstraction de données. C'était une idée merveilleuse. Elle est sortie de nulle part.",
    createdAt: "2026-09-01T11:12:00.000Z",
  },
    {
  id: "8",
  authorName: "Grace Hopper",
  authorHandle: "ghopper",
  content: "Le mot 'bug' vient d'un vrai insecte trouvé dans un relais.",
  image:{
        url:"https://upload.wikimedia.org/wikipedia/commons/5/55/Grace_Hopper.jpg",
        alt:  "Portrait de Grace Hopper",
        }, 
  createdAt: "2026-06-15T10:30:00.000Z",
},
{
  id: "9",
  authorName: "Alan Turing",
  authorHandle: "aturing",
  content: "Nous ne pouvons voir qu'une courte distance devant nous, mais nous pouvons voir qu'il y a beaucoup à faire.",
  createdAt: "2026-05-20T14:45:00.000Z",
},
    {
  id: "10",
  authorName: "Dennis Ritchie",
  authorHandle: "dmr",
  content: "UNIX est simple, mais il faut être un génie pour comprendre sa simplicité.",
  createdAt: "2026-04-10T08:20:00.000Z",
},
    

];