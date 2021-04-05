import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { AiFillEdit } from "react-icons/ai";
import EditTodo from "./EditTodo";
import Count from "./count";

const SearchAndButtton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchForm = styled.input`
  font-size: 20px;
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 10px;
`;

const RemoveAllButton = styled.button`
  width: 16%;
  height: 40px;
  background: #f54242;
  border: none;
  font-weight: 500;
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
`;

const TodoName = styled.span`
  font-size: 27px;
  ${({ is_completed }) =>
    is_completed &&
    `
    opacity: 0.4;
  `}
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 7px auto;
  padding: 10px;
  font-size: 25px;
`;

const CheckedBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 7px;
  color: green;
  cursor: pointer;
`;

const UncheckedBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 7px;
  cursor: pointer;
`;

const EditButton = styled.span`
  display: flex;
  align-items: center;
  margin: 0 7px;
`;

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [count, setCount] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/lists.json")
      .then((resp) => {
        console.log(resp.data);
        setTodos(resp.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const removeAllTodos = () => {
    const sure = window.confirm("Are you sure?");
    if (sure) {
      axios
        .delete("http://localhost:3001/api/v1/lists/destroy_all")
        .then((resp) => {
          setTodos([]);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const updateIsCompleted = (index, val) => {
    var data = {
      id: val.id,
      name: val.name,
      is_completed: !val.is_completed,
    };
    axios
      .patch(`http://localhost:3001/api/v1/lists/${val.id}`, data)
      .then((resp) => {
        const newTodos = [...todos];
        newTodos[index].is_completed = resp.data.is_completed;
        setTodos(newTodos);
      });
  };

  // -useEffectを用いると画面読み込み時に一度だけデータの取得がされる
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/api/v1/counts/2.json")
  //     .then((resp) => {
  //       console.log(resp.data);
  //       const getCount = resp.data;
  //       console.log(getCount);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/counts/2.json")
      .then((resp) => {
        console.log(resp.data);
        setCount(resp.data);
      })
      .catch((e) => {
        console.loq(e);
      });
  }, []);

  const num = count.number;

  return (
    <>
      <h1>Todo List</h1>
      <SearchAndButtton>
        <SearchForm
          type="text"
          placeholder="search todo..."
          onChange={(event) => {
            setSearchName(event.target.value);
          }}
        />
        <RemoveAllButton onClick={removeAllTodos}>Remove All</RemoveAllButton>
      </SearchAndButtton>

      <div>
        {todos
          .filter((val) => {
            if (searchName === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchName.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <Row key={key}>
                {val.is_completed ? (
                  <CheckedBox>
                    <ImCheckboxChecked
                      onClick={() => updateIsCompleted(key, val)}
                    />
                  </CheckedBox>
                ) : (
                  <UncheckedBox>
                    <ImCheckboxUnchecked
                      onClick={() => updateIsCompleted(key, val)}
                    />
                  </UncheckedBox>
                )}
                <TodoName is_completed={val.is_completed}>{val.name}</TodoName>
                <Link to={"/lists/" + val.id + "/edit"}>
                  <EditButton>
                    <AiFillEdit />
                  </EditButton>
                </Link>
              </Row>
            );
          })}
      </div>
      <Count getCount={num} />
    </>
  );
}

export default TodoList;
