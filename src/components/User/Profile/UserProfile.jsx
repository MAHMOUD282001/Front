import { Container } from "@mui/material";
import UserProfileCard from "./UserProfileCard";
import MainTitle from "../../Utility/MainTitle";
import UserPasswordChangeContent from "./UserPasswordChangeContent";
import MainDashboardContent from "../../Utility/MainDashboardContent";



function UserProfile() {
  return (
    <MainDashboardContent open={open} style={{ flexGrow: 1, padding: 0 }}>
      <Container>
        <MainTitle title={"الملف الشخصى"} />
        <UserProfileCard />
        
        <UserPasswordChangeContent />
      </Container>
    </MainDashboardContent>
  );
}

export default UserProfile;
