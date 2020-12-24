import { TextField } from "@material-ui/core";
import React, { ChangeEvent, FunctionComponent, useState } from "react";
import "./SearchInput.css";

interface Props {
  handleSearch: (searchText: string) => void;
}

const SearchInput: FunctionComponent<Props> = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState<string>("");

  const doSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    const text: string = event.target.value;
    handleSearch(text);
    setSearchText(text);
  };

  return (
    <div className="search_input_container">
      <TextField
        label="Search"
        type="text"
        variant="outlined"
        value={searchText}
        fullWidth
        onChange={doSearch}
      />
    </div>
  );
};

export default SearchInput;
