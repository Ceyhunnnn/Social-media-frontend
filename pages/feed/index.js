import Feed from "@/components/feed/Feed";
import MainLayout from "@/layouts/MainLayout";

const index = () => {
  return (
    <MainLayout>
      <Feed />
    </MainLayout>
  );
};
export async function getStaticProps({ locale }) {
  return {
    props: {},
  };
}

export default index;
