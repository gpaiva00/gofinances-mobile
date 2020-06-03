function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'asdlfakjsd;fkja;skdjf;akjsd;l',
        user: {
          name: 'Gabriel',
          email: 'paivadepaiva00@gmail.com',
        }
      });
    }, 2000)
  })
}

export { signIn }