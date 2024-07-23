import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
      });

      const { name, username, email } = user;

      const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
}