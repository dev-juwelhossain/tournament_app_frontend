import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MyMatches from "../pages/MyMatches";
import Results from "../pages/Results";
import Profile from "../pages/Profile";
import MainLayout from "../layout/MainLayout";
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import BrMatches from "../pages/BrMatches"
import MatcheDetails from "../pages/MatcheDetails";
import Wallet from "../pages/Wallet";
import ProfileEdit from "../pages/ProfileEdit";
import Withdraw from "../pages/Withdraw";
import Rules from "../pages/Rules";
import TopPlayers from "../pages/TopPlayers";
import ResultDetails from "../pages/ResultDetails";
import AddMoney from "../pages/AddMoney";
import TransactionHistory from "../pages/TransactionHistory";
import ClassSquad from "../pages/ClassSquad";
import LoneWolf from "../pages/LoneWolf";
import CsMatch from "../pages/CsMatch";
import FreeMatch from "../pages/FreeMatch";
import ClassSquadMatchDetails from "../pages/ClassSquadMatchDetails";
import LoneWolfRules from "../pages/LoneWolfRules";
import BrSquad from "../pages/BrSquad";
import BrSquadDetails from "../pages/BrSquadDetails";
import BrMatchJoin from "../pages/BrMatchJoin";
import ThankYou from "../pages/ThankYou";
import PrivateRoute from "../PrivateRoute";


const MainRoutes = createBrowserRouter([{
   path: "/",
   element:  <MainLayout />,
   children: [
      {
         path: "/",
         element: <Home />
      },
      {
         path: "/results",
         element: <Results />
      },
      {
         path: "/profile",
         element: <Profile />
      },

      {
         path: "/my-matches",
         element: <MyMatches />
      },

      {
         path: "/signup",
         element: <SignUp />
      },

      {
         path: "/login",
         element: <Login />
      },
      {
         path: "/brmatches/:id",
         element: <BrMatches />
      },
      {
         path: "/matchdetails/:id",
         element: <MatcheDetails />
      },

      {
         path: "/wallet",
         element: <Wallet />
      },

      {
         path: "/profile-edit",
         element: <ProfileEdit />
      },

      {
         path: "/withdraw",
         element: <Withdraw />
      },

      {
         path: "/rules",
         element: <Rules />
      },

      {
         path: "/top-players",
         element: <TopPlayers />
      },
      {
         path: "/resultdetails",
         element: <ResultDetails />
      },
      {
         path: "/addmoney",
         element: <AddMoney />
      },
      {
         path: "/transaction-history",
         element: <TransactionHistory />
      },
      {
         path: "/class-squad",
         element: <ClassSquad />
      },
      {
         path: "/lone-wolf",
         element: <LoneWolf />
      },
      {
         path: "/cs-match",
         element: <CsMatch />
      },
      {
         path: "/free-match",
         element: <FreeMatch />
      },
      {
         path: "/class-squad-details",
         element: <ClassSquadMatchDetails />
      },
      {
         path: "/lone-wolf-details",
         element: <LoneWolfRules />
      },
      {
         path: "/br-squad-match",
         element: <BrSquad />
      },
      {
         path: "/br-squad-details",
         element: <BrSquadDetails />
      },
      {
         path: "/br-match-join/:id",
         element: <BrMatchJoin />
      },
      {
         path: "/thankyou",
         element: <ThankYou />
      }



   ]

}]);
export default MainRoutes;