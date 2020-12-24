import { Button } from "@material-ui/core";
import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import api from "../../api/api";
import SearchResult from "../list/SearchResult";
import { User } from "../login/Login";
import SearchInput from "../search/SearchInput";
import "./Dashboard.css";

export interface Actor {
  char_id: number;
  name: string;
  img: string;
  nickname: string;
}

interface Props {
  handleLogin: (user: User) => void;
}

const Dashboard: React.FC<Props> = ({ handleLogin }) => {
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
      <div style={{ alignSelf: "flex-end" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleLogin({ userName: "root", password: "root" })}
        >
          Logout
        </Button>
      </div>
      <SearchInput handleSearch={setSearchText}></SearchInput>
      <SearchResult actors={actors}></SearchResult>
    </div>
  );
};

export default Dashboard;
