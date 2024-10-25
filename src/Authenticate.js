import React, { useEffect, useState } from "react";
import * as fcl from "@blocto/fcl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Tooltip from "@mui/material/Tooltip";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Snackbar from "@mui/material/Snackbar";
import { styled } from "@mui/material/styles";

// Estilos personalizados para os botões
const StyledButton = styled(Button)(({ theme }) => ({
  transition:
    "background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  "&:active": {
    transform: "translateY(0)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
}));

// Estilos personalizados para o box de saldo
const BalanceBox = styled(Box)(({ theme }) => ({
  transition: "transform 0.2s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
}));

const Authenticate = () => {
  const [user, setUser] = useState({ loggedIn: false });
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState(false);
  const [balance, setBalance] = useState(null);

  const formatBalance = (balance) => {
    if (balance === null) return "Carregando...";
    if (balance === "Erro") return "Erro ao carregar";
    const floatBalance = parseFloat(balance);
    return (
      floatBalance.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) + " FLOW"
    );
  };

  useEffect(() => {
    fcl.currentUser().subscribe(setUser);
  }, []);

  const logIn = () => {
    fcl.logIn();
  };

  const logOut = () => {
    fcl.unauthenticate();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(user?.addr || "");
    setCopied(true);
  };

  const handleCloseSnackbar = () => {
    setCopied(false);
  };

  const fetchBalance = async () => {
    if (user?.addr) {
      try {
        const account = await fcl.account(user.addr);
        setBalance(account.balance / Math.pow(10, 8)); // Ajuste do saldo considerando 8 decimais.
      } catch (error) {
        console.error("Erro ao buscar saldo:", error);
        setBalance("Erro");
      }
    }
  };

  useEffect(() => {
    if (user?.loggedIn) {
      fetchBalance();
    }
  }, [user?.loggedIn]);

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="10px"
      >
        <Tooltip title="Minhas Informações">
          <IconButton
            onClick={() => setShowDetails(!showDetails)}
            color="primary"
            size="large"
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        {showDetails && (
          <>
            {user.loggedIn ? (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="10px"
              >
                <Box display="flex" alignItems="center" gap="10px">
                  <CheckCircleIcon style={{ color: "green" }} />
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    Usuário conectado
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center" gap="10px">
                  <Typography variant="body1">
                    Endereço: {user?.addr}
                  </Typography>
                  <Tooltip title="Copiar endereço">
                    <IconButton onClick={copyToClipboard}>
                      <FileCopyIcon />
                    </IconButton>
                  </Tooltip>
                </Box>

                <Box display="flex" alignItems="center" gap="10px">
                  <StyledButton
                    variant="contained"
                    color="error"
                    onClick={logOut}
                  >
                    Logout
                  </StyledButton>
                  <BalanceBox
                    width="auto"
                    minWidth="80px"
                    height="40px"
                    bgcolor="success.main"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="4px"
                    padding="0 10px"
                  >
                    <Typography color="white">
                      {formatBalance(balance)}
                    </Typography>
                  </BalanceBox>
                </Box>
              </Box>
            ) : (
              <StyledButton variant="contained" color="primary" onClick={logIn}>
                Login com Blocto
              </StyledButton>
            )}
          </>
        )}

        <Snackbar
          open={copied}
          autoHideDuration={2000}
          onClose={handleCloseSnackbar}
          message="Endereço copiado para a área de transferência!"
        />
      </Box>
    </div>
  );
};

export default Authenticate;
