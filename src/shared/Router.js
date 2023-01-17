import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import CampSearch from "../pages/camp/CampSearch";
import SignUp from "../pages/signUp/SignUp";
import Login from "../pages/signUp/Login";
import CampDetail from "../pages/camp/CampDetail";
import ReviewAdd from "../pages/review/ReviewAdd";
import ReserveSearch from "../pages/reserve/ReserveSearch";
import ReserveDetail from "../pages/reserve/ReserveDetail";
import ReviewList from "../pages/review/ReviewList";
import ReviewDetail from "../pages/review/ReviewDetail";
import LikeReview from "../pages/review/LikeReview";
import RecentViewCamp from "../pages/camp/RecentViewCamp";
import MyPage from "../pages/myPage/MyPage";
import MyCamp from "../pages/myPage/MyCamp";
import MyReview from "../components/MyPage/MyReview";
import ReservePost from "../pages/reserve/ReservePost";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/camp/search"
              element={<CampSearch />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/campdetail/:id" element={<CampDetail />} />
            <Route path="/reviewadd" element={<ReviewAdd />} />
            <Route path="/reserve/search" element={<ReserveSearch />} />
            <Route path="/reserve/post" element={<ReservePost />} />
            <Route path="/reserve/detail/:id" element={<ReserveDetail />} />
            <Route path="/reviewlist" element={<ReviewList />} />
            <Route path="/reviewdetail" element={<ReviewDetail />} />
            <Route path="/likereview" element={<LikeReview />} />
            <Route path="/recentviewcamp" element={<RecentViewCamp />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/mypage/mycamp" element={<MyCamp />} />
            <Route path="/mypage/myreview" element={<MyReview />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default Router;
