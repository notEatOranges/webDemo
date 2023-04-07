/*
 * @Author: hly
 * @Description: Selenium
 * @Date: 2022-09-30 11:07:30
 * @LastEditTime: 2022-09-30 11:30:39
 * @FilePath: /Vue-demo/Selenium/第一个Selenium脚本.spec.js
 */

const { By, Builder } = require('selenium-webdriver')
const { suite } = require('selenium-webdriver/testing')
const assert = require('assert')

suite(function (env) {
  describe('First script', function () {
    let driver
    before(async function () {
      // 使用驱动实例开启会话
      driver = await new Builder().forBrowser('chrome').build()
    })

    after(async () => await driver.quit())

    it('First Selenium script', async function () {
      // 在浏览器上执行操作 ==> 导航到一个网页
      await driver.get('https://www.selenium.dev/selenium/web/web-form.html')
      // 请求 浏览器信息
      let title = await driver.getTitle()
      assert.equal('Web form', title)
      // 建立等待策略
      await driver.manage().setTimeouts({ implicit: 500 })
      // 发送命令 查找元素
      let textBox = await driver.findElement(By.name('my-text'))
      let submitButton = await driver.findElement(By.css('button'))
      // 操作元素
      await textBox.sendKeys('Selenium')
      await submitButton.click()
      // 获取元素信息
      let message = await driver.findElement(By.id('message'))
      let value = await message.getText()
      // 结束会话
      assert.equal('Received!', value)
    })
  })
})
