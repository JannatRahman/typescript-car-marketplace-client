import { authClient } from "@/lib/auth-client";

export interface ClientSessionUser {
  id: string;
  name: string;
  email: string;
  emailVerified?: boolean;
  image?: string | null;
  role?: string; 
  createdAt?: Date;
  updatedAt?: Date;
}
export function useClientSession() {
  const { data: session, isPending, error } = authClient.useSession();
  console.log(session);

  return {
    session,
    user: session?.user as ClientSessionUser | null,
    isPending,
    error,
  };
}