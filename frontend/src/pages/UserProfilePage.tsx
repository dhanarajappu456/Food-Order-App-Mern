import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

function UserProfilePage() {
  const { currentUser, isLoading: getIsLoading } = useGetMyUser();
  const { updateUser, isLoading: updateIsLoading } = useUpdateMyUser();

  if (getIsLoading) {
    return <span>Loading...</span>;
  }
  return (
    <UserProfileForm
      onSave={updateUser}
      isLoading={updateIsLoading}
      currentUser={currentUser}
    />
  );
}

export default UserProfilePage;
