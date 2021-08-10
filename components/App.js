// import React, { useState, useEffect } from 'react';
// import buildHasuraProvider from 'ra-data-hasura';
// import { Admin, Resource } from 'react-admin';
// import { ApolloClient, InMemoryCache } from "@apollo/client";
// import authProvider from '../utils/authProvider';
// import { auth0 } from "../utils/authProvider";
// import { createBrowserHistory as createHistory } from "history";
// import { ProductList, ProductCreate } from '../pages/products';
// import Dashboard from "./Dashboard";
// import LoginPage from "../pages/login";

// const history = createHistory();

// const createApolloClient = async (token) => {
//     return new ApolloClient({
//         uri: 'https://react-admin.hasura.app/v1/graphql',
//         cache: new InMemoryCache(),
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     })
// }

// const App = () => { 
//     const [dataProvider, setDataProvider] = useState({});

//     useEffect(() => {
//         const buildDataProvider = async () => {

//             const isAuthenticated = await auth0.isAuthenticated();
//             if(!isAuthenticated) {
//                 return;
//             }
//             const token = await auth0.getIdTokenClaims();
//             const idToken = token.__raw;
//             console.log(idToken);

//             const apolloClient = await createApolloClient(idToken);

//             const dataProvider = await buildHasuraProvider({
//                 client: apolloClient
//             });
//             setDataProvider(() => dataProvider);
//         }
//         buildDataProvider();
//     }, []);

//     /*
//     if(dataProvider !== {}) {
//         return <div>Loading...</div>
//     }
//     */

//     return (
//         <Admin 
//             dataProvider={dataProvider} 
//             authProvider={authProvider}
//             title="Hasura Dashboard"
//             dashboard={Dashboard}
//             loginPage={LoginPage}
//         >
//             <Resource name="products" list={ProductList} create={ProductCreate}></Resource>
//         </Admin>
//     )
// };
// export default App;

