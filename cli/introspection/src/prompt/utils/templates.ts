export const sqliteSchemaOnly = (usePhoton: boolean) => `datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
${
  usePhoton
    ? `
generator photon {
  provider = "photonjs"
}`
    : ''
}

model User {
  id    String  @default(cuid()) @id @unique
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        String   @default(cuid()) @id @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  published Boolean
  title     String
  content   String?
  author    User?
}`
