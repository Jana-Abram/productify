import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { syncUser } from "../lib/api";

function useUserSync() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  const synced = useRef(false);

  const { mutate: syncUserMutation, isSuccess } = useMutation({
    mutationFn: syncUser,
  });

  useEffect(() => {
    if (isSignedIn && user && !synced.current) {
      synced.current = true;

      syncUserMutation({
        email: user.primaryEmailAddress?.emailAddress,
        name: user.fullName || user.firstName,
        imageUrl: user.imageUrl,
      });
    }
  }, [isSignedIn, user, syncUserMutation]);

  return { isSynced: isSuccess };
}

export default useUserSync;