import React from "react";
//import App from './App';
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";
//import {BrowserRouter as Router, Route} from 'react-router-dom';

import HomeLandingPage from "../Components/homeLandingPage";

const httpLink = createHttpLink({
  uri: "https://devmiygosstudio.azurewebsites.net/",
});

const authLint = setContext(() => {
  const token = localStorage.getItem("jwtToken");
  //console.log(`token ${token}`);
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLint.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <HomeLandingPage />
    </ApolloProvider>
  );
}
