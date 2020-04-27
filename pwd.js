const pwdWriter = () => {
  process.stdout.write("prompt > ");

  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    process.stdout.write("You typed: " + cmd);
    const pwd = console.log(process.cwd());
  });
};

module.export = {
    pwdWriter,
}
