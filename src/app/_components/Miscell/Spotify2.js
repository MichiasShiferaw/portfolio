"use client"
import React, { useState,useEffect } from 'react';
import axios from "axios";
// import {getToken} from "./Spotify3";

const client_id = "cf46680f328e42f2a88b46932b0ff4f1";
const client_secret = "140db09c7cb64394920f0f7a37a58560";

async function getToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
  });

  return await response.json();
}

export async function getAccessToken(clientId) {
  const verifier = localStorage.getItem("verifier");

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("grant_type", "authorization_code");
//   params.append("code", code);
  params.append("redirect_uri", "http://localhost:5173/callback");
//   params.append("code_verifier", verifier);

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  const { access_token } = await result.json();
  return access_token;
}


async function getTrackInfo(access_token) {
  const response = await fetch(
    "https://api.spotify.com/v1/tracks/4cOdK2wGLETKBW3PvgPWqT",
    {
      method: "GET",
      headers: { Authorization: "Bearer " + access_token },
    }
  );

  return await response.json();
}

getToken().then((response) => {
  getTrackInfo(response.access_token).then((profile) => {
    console.log(profile);
  });
});


const Spotify2 = () => {
  const CLIENT_ID = "cf46680f328e42f2a88b46932b0ff4f1";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  // const getToken = () => {
  //     let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
  //     let token = urlParams.get('access_token');

  
  // }


  

  
  console.log(token+"Michias")
  console.log(getToken)
  console.log("SHiferaw")
  console.log(getAccessToken(CLIENT_ID))

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify React</h1>
        <p><getToken/></p>
      </header>
    </div>
  );
}

export default Spotify2