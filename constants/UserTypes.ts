import { UserType } from "@/enums/user-type.enum";

export const UserTypes = {
  [UserType.MASTER]: "Master",
  [UserType.ADMIN]: "Administrador(a)",
  [UserType.STUDENT]: "Estudante",
  [UserType.TEACHER]: "Professor(a)",
};
