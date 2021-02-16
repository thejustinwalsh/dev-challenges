import React, { useState, useEffect } from 'react'
import { Input } from "./Input";
import styled from "styled-components";

const SelectWrapper = styled.div`
    position: relative;
    width: 500px;
    font-family: 'Noto Sans JP', sans-serif;
  `;

const DropDownMenu = styled.ul<Partial<{ isVisible: boolean }>>`
  margin: 0 0;
  padding: 1rem 1rem;
  display: ${props => props.isVisible ? "block" : "none"};
  border: 1px solid #828282;
  border-radius: 8px;
  list-style: none;
`;

const DropDownItem = styled.li`
  padding: .5rem 0;
  cursor: pointer;
`;

const findOption = (search, options) => {
  return options.filter((option) => option.title.startsWith(search));
}

export const Select = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [icon, setIcon] = useState("expand_more");
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([]);
  const [values, setValues] = useState([]);
  const [selectedId, setSelectedId] = useState(-1);

  const onItemSelect = (index) => {
    console.log(index, options[index]);
    setSearch(options[index].title);
  }
  
  // Fetch options
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setOptions(json));
  }, []);

   // Update Selected Item
   useEffect(() => {
    if (selectedId > 0) {
      const res = options.find((opt) => opt.id === selectedId);
      console.log(res);
      setSearch(res.title);
    }
  }, [selectedId, options]);

  // Render Values
  useEffect(() => {
    if (search) {
      const res = findOption(search, options);
      setValues(res.map((opt, index) => <DropDownItem key={opt.id} onClick={() => setSelectedId(opt.id)}>{opt.title}</DropDownItem>));
    }
    else {
      setValues([]);
    }

    setIsVisible(search ? true : false);
  }, [search, options]);

  // Icon
  useEffect(() => setIcon(isVisible ? "expand_less" : "expand_more"), [isVisible]);
    
  return (
    <SelectWrapper>
      <Input value={search} onChange={(v) => setSearch(v) } endIcon={icon} fullWidth {...props} />
      <DropDownMenu isVisible={isVisible}>
        {values}
      </DropDownMenu>
    </SelectWrapper>
  );
};
