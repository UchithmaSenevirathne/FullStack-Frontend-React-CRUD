import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
      });
    
      const { id } = useParams();
}