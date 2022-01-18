process.stdout.write('hello from spinner1.js... \rheyyy\n');
time = 700;
const spinner = ['\r|', '\r/', '\r-', '\r\\', '\r\|  '];

spinner.forEach(ele => {
   setTimeout(() => {process.stdout.write(ele)}, time+=50)
});
