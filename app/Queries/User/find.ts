export const findById = async (userId: number): Promise<boolean> => {
  const { default: User } = await import('App/Models/User')

  const user = await User.findBy('id', userId)

  if (user) {
    return true
  }

  return false
}
