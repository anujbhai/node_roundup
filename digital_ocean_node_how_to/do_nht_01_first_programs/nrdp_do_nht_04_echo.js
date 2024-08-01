const args = process.argv.slice(2)

args.forEach(arg => {
  let env_var = process.env[arg]

  if (env_var === undefined) {
    console.error(`Could not find "${arg}" in environment.`)
  } else {
    console.log(env_var)
  }
});

