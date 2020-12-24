import React, { useEffect, useState } from "react";
import SearchResult from "../list/SearchResult";
import SearchInput from "../search/SearchInput";
import api from "../../api/api";
import "./Dashboard.css";
import { AxiosResponse } from "axios";

export interface Actor {
  char_id: number;
  name: string;
  img: string;
  nickname: string;
}

const Dashboard: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [actors, setActors] = useState<Actor[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response: AxiosResponse<Actor[]> = await api.get<Actor[]>(
        "/characters",
        {
          params: {
            name: searchText,
          },
        }
      );
      setActors(response.data);
    };

    const timeoutId: NodeJS.Timeout = setTimeout(() => {
      fetchCharacters();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchText]);

  return (
    <div className="dashboard_container">
      <SearchInput handleSearch={setSearchText}></SearchInput>
      <SearchResult actors={actors}></SearchResult>
    </div>
  );
};

export default Dashboard;
