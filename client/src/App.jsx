import { Suspense, useState } from "react";
import "./App.css";
import Website from "./pages/Website";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import {QueryClient, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Property from "./pages/Property/Property";
import UserDetailsContext from "./Context/UserDetailsContext";
function App() {
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState(
    {
      favourites: [],
      bookings: [],
      token: null
    }
  )

  return (
    <UserDetailsContext.Provider value={{userDetails, setUserDetails}}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter >
          <Suspense fallback={<div>Loading...</div>}>
            {/* Nhánh View */}
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Website />}/>
                <Route path="/properties">
                  <Route index element={<Properties />}/>
                  <Route path=":propertyId" element={<Property />} />
                </Route>
              </Route>  
            </Routes>
          </Suspense>
        </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </UserDetailsContext.Provider>
  );
}

export default App;
