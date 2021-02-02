import React from "react";
import "../../webcomponent/ActorCard";
import { Actor } from "../dashboard/Dashboard";
import "./SearchResult.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "actor-card": ActorCardProps;
    }
  }
}
interface ActorCardProps {
  key: number;
  name: string;
  img: string;
  nickname: string;
}

interface Props {
  actors: Actor[];
}

const SearchResult: React.FC<Props> = React.memo(({ actors }) => {
  return (
    <div className="search_result_container">
      {actors &&
        actors.map((actor) => {
          return (
            <actor-card
              key={actor.char_id}
              name={actor.name}
              img={actor.img}
              nickname={actor.nickname}
            ></actor-card>
          );
        })}
    </div>
  );
});

export default SearchResult;
