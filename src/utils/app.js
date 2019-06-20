/*
 * @Author: czy0729
 * @Date: 2019-06-19 14:43:58
 * @Last Modified by: czy0729
 * @Last Modified time: 2019-06-19 14:45:40
 */
export function app() {}

/**
 * (mock) 500px的数据转成wx富文本结构
 * @param {*} data
 */
export function genRichTextNodes(data) {
  return data.map(item => {
    if (item.type === 'photo') {
      return {
        name: 'img',
        attrs: {
          class: 'c-rich-text__img',
          src: `${item.url.baseUrl}!p5`,
          style: 'margin-bottom: 20px; width: 100%; height: initial;'
        }
      }
    }
    return {
      name: 'p',
      attrs: {
        class: 'c-rich-text__text',
        style:
          'margin-bottom: 20px; font-size: 15px; line-height: 30px; color: #282828;'
      },
      children: [
        {
          type: 'text',
          text: item.description
        }
      ]
    }
  })
}
