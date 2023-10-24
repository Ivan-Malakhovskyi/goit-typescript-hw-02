/*
  У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
type RoleDescriptionBase = Record<string, string>;

const RoleDescription: RoleDescriptionBase = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

export { RoleDescription };
