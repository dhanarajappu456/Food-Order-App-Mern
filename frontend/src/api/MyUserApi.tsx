import { User } from "@/types/types";
import { useAuth0 } from "@auth0/auth0-react";

import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

// for updating data in server , we use useMutation
// for fetching data and displaying the dat in ui , we use
//useQuery
const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useGetMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyUserRequest = async (): Promise<User> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${VITE_API_BASE_URL}/api/my/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    return response.json();
  };

  const {
    data: currentUser,
    isError,
    isLoading,
    error,
  } = useQuery("fetchCurrentUser", getMyUserRequest);
  return { currentUser, isError, isLoading, error };
};
export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  console.log("auth", getAccessTokenSilently());
  const createMyUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${VITE_API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Failed to create the user");
    }
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useMutation(createMyUserRequest);

  if (error) {
    toast.error(error.toString());
  }
  return { createUser, isLoading, isError, isSuccess };
};

type UpdateMyUserRequest = {
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};
export const useUpdateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyUserRequest = async (FormData: UpdateMyUserRequest) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${VITE_API_BASE_URL}/api/my/user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(FormData),
    });

    if (!response.ok) {
      throw new Error("Failed to update the user...");
    }
  };

  const {
    mutateAsync: updateUser,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useMutation(updateMyUserRequest);
  if (isSuccess) {
    toast.success("User profiles updated!!!");
  }
  if (error) {
    toast.error(error.toString());
  }
  return {
    updateUser,

    isLoading,
  };
};
