import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import validateUserPermission from "../utils/validateUserPermission";

type UseCanParams = {
  permissions?: string[];
  roles?: string[];
}
export function UseCan({ permissions, roles }: UseCanParams) {
  const { user, isAuthenticated } = useContext(AuthContext)

  if (!isAuthenticated) {
    return false
  }

  const userHasValidPermissions = validateUserPermission({
    user,
    permissions,
    roles
  })

  return userHasValidPermissions
}