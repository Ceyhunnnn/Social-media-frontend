import Profile from "@/components/profile/Profile";
import MainLayout from "@/layouts/mainLayout/MainLayout";
import ProfileLayout from "@/layouts/profileLayout/ProfileLayout";

const index = () => {
  return (
    <MainLayout>
      <ProfileLayout>
        <Profile />
      </ProfileLayout>
    </MainLayout>
  );
};
export async function getStaticProps({ locale }) {
  return {
    props: {},
  };
}
export default index;
