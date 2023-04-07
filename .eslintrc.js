module.exports = {
    // 标识运行环境
    env: {
      browser: true,
      node: true
    },
  
    // 使用的插件
    plugins: [
      'react'
    ],
  
    // 扩展配置
    extends: [
      // 通用规则
      'eslint:recommended',
  
      // 额外使用 React 相关的规则
      'plugin:react/recommended',
  
      // 引入 Prettier 的 ESLint 配置
      'plugin:prettier/recommended',
  
      // 集成 airbnb 规则
      'airbnb'
    ],
  
    // 自定义规则
    rules: {
      // 对象字面量中冒号前面不要有空格，后面需要有空格
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
  
      // 小括号里面要不要有空格
      'space-in-parens': ['error', 'never'],
  
      // 强制在花括号中使用空格
      'object-curly-spacing': ['error', 'always'],
  
      // 要求或禁止末尾逗号
      'comma-dangle': ['error', 'never'],
  
      // 对象和数组括号中要求或禁止换行
      'object-curly-newline': ['error', { consistent: true }],
  
      // 禁止直接使用 Object.prototypes 的内置属性
      'no-prototype-builtins': 'off',
  
      // 引号类型
      quotes: ['error', 'single'],
  
      //缩进风格
      'indent': ['error', 2],
  
      // 不允许使用未定义变量
      'no-undef': 'error',
  
      // 禁止在条件表达式中使用赋值语句
      'no-cond-assign': 'error',
  
      // 强制在函数括号内使用一致的换行
      'function-paren-newline': ['error', { 'minItems': 3 }],
  
      // 不允许出现未使用的变量
      'no-unused-vars': 'error',
  
      // 不允许在 case 语句中定义变量或函数
      'no-case-declarations': 'off',
  
      // 禁用不必要的转义字符
      'no-useless-escape': 'off',
  
      // 禁止修改类声明的变量
      'no-class-assign': 'error',
  
      // 限制最大空行数
      'no-multiple-empty-lines': ['error', { 'max': 2 }],
  
      // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动 - 如果递增，请使用“++”，如果递减，请使用“--”。
      'for-direction': 'error',
  
      // 禁止出现不必要的布尔类型转换
      'no-extra-boolean-cast': 'error',
  
      // 不允许修改 const 声明的变量
      'no-const-assign': 'error',
  
      // 禁止将变量初始化为 undefined
      'no-undef-init': 'error',
  
      // 禁止将常量赋值为非常量值
      'no-const-assign': 'error',
  
      // 强制函数中的位置依赖关系
      'function-call-argument-newline': ['error', 'consistent'],
  
      // 禁止对函数参数赋值
      'no-param-reassign': 'error',
  
      // 强制在函数左括号周围空格的一致性
      'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
  
      // 要求使用箭头函数作为回调函数
      'prefer-arrow-callback': 'error',
  
      // 强制在花括号内使用一致的换行符
      'object-curly-newline': ['error', { 'consistent': true }],
  
      // 禁止使用未定义的变量
      'no-undef': 'error',
  
      // 强制在逗号后面使用一致的空格
      'comma-spacing': ['error', { 'before': false, 'after': true }],
  
      // 禁止在块语句中使用声明（变量或函数）
      'no-inner-declarations': 'off',
  
      // 强制状态前无空格
      'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
  
      // 强制在注释中// 或/*使用一致的空格
      'spaced-comment': ['error', 'always'],
      
      // 设置 react 特定规则
      'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx'] }],
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/display-name': 'off',
      'react/no-array-index-key': 'off',
      'react/prop-types': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-wrap-multilines': ['error', {
        'declaration': 'parens',
        'assignment': 'parens',
        'return': 'parens',
        'arrow': 'ignore',
        'condition': 'ignore',
        'logical': 'ignore',
        'prop': 'ignore'
      }]
    }
  };
  