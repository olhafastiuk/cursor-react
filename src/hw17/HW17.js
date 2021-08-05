import "./hw17.css";
import React, { useState, useEffect } from "react";
import Contact from "./Contact";

export default function Hw17() {
  const contacts = [
    {
      firstName: "Барней",
      lastName: "Стинсовський",
      phone: "+380956319521",
      gender: "male",
    },
    {
      firstName: "Робін",
      lastName: "Щербатська",
      phone: "+380931460123",
      gender: "female",
    },
    {
      firstName: "Анонімний",
      lastName: "Анонімус",
      phone: "+380666666666",
    },
    {
      firstName: "Лілія",
      lastName: "Олдровна",
      phone: "+380504691254",
      gender: "female",
    },
    {
      firstName: "Маршен",
      lastName: "Еріксонян",
      phone: "+380739432123",
      gender: "male",
    },
    {
      firstName: "Теодор",
      lastName: "Мотсбес",
      phone: "+380956319521",
      gender: "male",
    },
  ];

  const [users, setUsers] = useState(contacts);
  const [searchTerm, setSearchTerm] = useState(contacts);

  useEffect(getFiltered, []);
  useEffect(getGender, [searchTerm]);

  function getGender() {
    let filteredFemale = [];
    let filteredMale = [];
    let filteredOther = [];
    if (document.getElementById("female").checked) {
      filteredFemale = filteredFemale.concat(
        searchTerm.filter((el) => el.gender === "female")
      );
    }
    if (document.getElementById("male").checked) {
      filteredMale = filteredMale.concat(
        searchTerm.filter((el) => el.gender === "male")
      );
    }
    if (document.getElementById("other").checked) {
      filteredOther = filteredOther.concat(
        searchTerm.filter((el) => el.gender != "male" && el.gender != "female")
      );
    }
    setUsers([
      ...new Set(filteredFemale.concat(filteredMale).concat(filteredOther)),
    ]);
  }

  function getFiltered() {
    let input = document.getElementById("search").value;
    const filteredLastName = contacts.filter(
      (el) => el.lastName.toLowerCase().indexOf(input.toLowerCase()) !== -1
    );
    const filteredFistName = contacts.filter(
      (el) => el.firstName.toLowerCase().indexOf(input.toLowerCase()) !== -1
    );
    const filteredPhone = contacts.filter(
      (el) => el.phone.toLowerCase().indexOf(input.toLowerCase()) !== -1
    );
    let filtered = [
      ...new Set(
        filteredLastName.concat(filteredFistName).concat(filteredPhone)
      ),
    ];

    setSearchTerm(filtered);
  }

  return (
    <div className="phone">
      <input
        type="text"
        placeholder="🔍 Пошук..."
        id="search"
        onChange={getFiltered}
      />
      <div className="filter">
        <div className="check">
          <input
            type="checkbox"
            name=""
            id="female"
            defaultChecked={true}
            onChange={getGender}
          />
          <p>👩</p>
        </div>
        <div className="check">
          <input
            type="checkbox"
            name=""
            id="male"
            defaultChecked={true}
            onChange={getGender}
          />
          <p>👨</p>
        </div>
        <div className="check">
          <input
            type="checkbox"
            name=""
            id="other"
            defaultChecked={true}
            onChange={getGender}
          />
          <p>?</p>
        </div>
      </div>
      <div className="contacts-list">
        {users.map((user) => (
          <Contact
            firstName={user.firstName}
            lastName={user.lastName}
            phone={user.phone}
            gender={user.gender}
          />
        ))}
      </div>
    </div>
  );
}
