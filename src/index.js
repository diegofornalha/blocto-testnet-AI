import React from "react";
import ReactDOM from "react-dom";
import * as fcl from "@blocto/fcl"; // Importa FCL para conexão com Flow
import "./index.css";
import App from "./App";
import "prismjs/themes/prism-tomorrow.css"; // Escolha o tema que preferir

// Configuração do FCL para conexão com a Flow Testnet e Blocto Wallet com seu DApp ID
fcl.config({
  "accessNode.api": "https://rest-testnet.onflow.org", // Conecta à Flow Testnet
  "discovery.wallet":
    "https://wallet-v2-dev.blocto.app/dd84a1e5-b351-4893-95cf-edf433c137d9/flow/authn", // Blocto Wallet com DApp ID
  "app.detail.title": "Brasil", // Título do aplicativo para a carteira
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
