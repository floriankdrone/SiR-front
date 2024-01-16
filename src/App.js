import "./App.css";
import HomeSection from "./sections/HomeSection/HomeSection";
import AdminSection from "./sections/AdminSection/AdminSection";
import LandingSection from "./sections/LandingSection/LandingSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";

const queryClient = new QueryClient();
const theme = createTheme({
  palette: {
    primary: {
      main: "#75c6be",
      contrastText: "#7e8ca0",
    },
  },
});

function App() {
  const authenticated = !!sessionStorage.getItem("session_start_time");

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  authenticated ? <Navigate to="/home" /> : <LandingSection />
                }
              />
              <Route path="/home" element={<HomeSection />} />
              <Route
                path="/admin"
                element={authenticated ? <AdminSection /> : <Navigate to="/" />}
              />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
