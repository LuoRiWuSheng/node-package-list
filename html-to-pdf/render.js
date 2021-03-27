const phantom = require('phantom');

(async function() {
// phantom每次都是一个promise
  const instance = await phantom.create();
  // 创建页面
  const page = await instance.createPage();

  await page.property('viewportSize', { width: 500, height: 300 });
  const status = await page.open('https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback');
  console.log(`页面打开的状态 [${status}].`);

  await page.render('stackoverflow.pdf');
  console.log(`File created at [./stackoverflow.pdf]`);

  await instance.exit();
})();
