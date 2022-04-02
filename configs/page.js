const env = require('./env_config'),
  isPrd = env.isPrd

const URL = {
  SOURCE: isPrd
    ? '//tximg.codemongo.com/jsplusplus-source/' //线上地址
    : '//localhost:3300/public/' //webpack本地内存打包后地址
}

module.exports = {
  INDEX: {
    HEAD: {
      TITLE: '前端开发官方网站 - WEB|JavaScript|Vue|React|Node',
      KEYWORD: '前端开发,WEB开发,在线课程,编程,项目实战,项目架构,JavaScript,Vue,React,Node',
      DESCRIPTION:
        '前端开发工程师精英就业班与提升班课程是针对前端开发零基础、爱好者、职业技术提升、互联网创业相关人员的一套完整的WEB前端开发学习体系，该体系通过深度基础课程对学员进行培养，使学员掌握最完整最有深度的技术理论知识和实战的基础技能。',
      FAVICON: '/img/logo108.png'
    },
    STYLESHEETS: [URL.SOURCE + 'css/index.css'],
    SCRIPTS: [URL.SOURCE + 'js/index.js']
  },
  LIST: {
    HEAD: {
      TITLE: '前端开发官方网站 - WEB|JavaScript|Vue|React|Node',
      KEYWORD: '前端开发,WEB开发,在线课程,编程,项目实战,项目架构,JavaScript,Vue,React,Node',
      DESCRIPTION:
        '前端开发工程师精英就业班与提升班课程是针对前端开发零基础、爱好者、职业技术提升、互联网创业相关人员的一套完整的WEB前端开发学习体系，该体系通过深度基础课程对学员进行培养，使学员掌握最完整最有深度的技术理论知识和实战的基础技能。',
      FAVICON: '/img/logo108.png'
    },
    STYLESHEETS: [URL.SOURCE + 'css/list.css'],
    SCRIPTS: [URL.SOURCE + 'js/list.js']
  },
  ERROR: {
    HEAD: {
      TITLE: '前端开发官方网站 - WEB|JavaScript|Vue|React|Node',
      KEYWORD: '前端开发,WEB开发,在线课程,编程,项目实战,项目架构,JavaScript,Vue,React,Node',
      DESCRIPTION:
        '前端开发工程师精英就业班与提升班课程是针对前端开发零基础、爱好者、职业技术提升、互联网创业相关人员的一套完整的WEB前端开发学习体系，该体系通过深度基础课程对学员进行培养，使学员掌握最完整最有深度的技术理论知识和实战的基础技能。',
      FAVICON: '/img/logo108.png'
    },
    STYLESHEETS: [URL.SOURCE + 'css/error.css'],
    SCRIPTS: [URL.SOURCE + 'js/error.js']
  }
}
