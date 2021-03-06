/** @jsxImportSource @welldone-software/why-did-you-render */
import React, { useState, useEffect, useCallback } from 'react'
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

export const Select = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [icon, setIcon] = useState("expand_more");
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([]);
  const [values, setValues] = useState([]);
  const [selectedId, setSelectedId] = useState(-1);

  // Fetch options
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setOptions(json));
  }, []);

  // Collect Values
  useEffect(() => {
    let searchTerm = search;
    if (selectedId) {
      const res = options.find((opt) => opt.id === selectedId);
      if (res) searchTerm = res.title;
    }

    if (searchTerm) {
      const res = options.filter((option) => option.title.startsWith(search));
      setValues(res.map((opt, index) => ({...opt, index})));
    }
    else {
      setValues([]);
    }

    setValue(searchTerm);
  }, [selectedId, search, options]);

  // Update Icon
  useEffect(() => setIcon(isVisible ? "expand_less" : "expand_more"), [isVisible]);

  // Manage Dropdown Visibility
  useEffect(() => setIsVisible(values.length > 0 && values[0].title !== value), [value, values]);
  
  // Update dependent props
  const onChangeCallback = useCallback((value) => {
    setSearch(value);
    setValue(value);
    setSelectedId(-1);
  }, []);

  const renderValues = values.map((opt) => {
    return <DropDownItem key={opt.id} onClick={() => setSelectedId(opt.id)}>{opt.title}</DropDownItem>;
  });

  return (
    <SelectWrapper>
      <Input value={value} onChange={onChangeCallback} endIcon={icon} fullWidth autoFocus {...props} />
      <DropDownMenu isVisible={isVisible}>
        {renderValues}
      </DropDownMenu>
    </SelectWrapper>
  );
};
