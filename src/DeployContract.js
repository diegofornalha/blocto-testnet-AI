import React, { useState } from "react";
import * as fcl from "@blocto/fcl";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";

const DeployContract = () => {
  const [status, setStatus] = useState("");
  const [transactionId, setTransactionId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [contractCode, setContractCode] = useState("");

  const deployContract = async () => {
    setLoading(true);
    setStatus("Implantando contrato...");

    try {
      // Adicione aqui a lógica para enviar a transação de deploy
      const txId = await fcl.mutate({
        cadence: contractCode,
        proposer: fcl.currentUser().authorization,
        payer: fcl.currentUser().authorization,
        authorizations: [fcl.currentUser().authorization],
        limit: 100,
      });

      setTransactionId(txId);
      const transaction = await fcl.tx(txId).onceSealed();

      if (transaction.status === 4) {
        setStatus("Contrato implantado com sucesso!");
      } else {
        setStatus("Erro ao implantar o contrato.");
      }
    } catch (error) {
      console.error("Erro ao implantar o contrato:", error);
      setStatus("Erro ao implantar o contrato: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <TextField
        label="Código do Contrato"
        variant="outlined"
        value={contractCode}
        onChange={(e) => setContractCode(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={deployContract}
        disabled={loading}
        style={{ marginBottom: "20px" }}
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Implantar Contrato"
        )}
      </Button>

      {status && (
        <Box my={2} width="100%" display="flex" justifyContent="center">
          <Alert
            severity={status.includes("sucesso") ? "success" : "error"}
            style={{ textAlign: "center" }}
          >
            {status}
            {transactionId && (
              <Typography variant="body2">
                ID da Transação: {transactionId}
              </Typography>
            )}
          </Alert>
        </Box>
      )}
    </Box>
  );
};

export default DeployContract;
