// export default async function slot(componentList) {
//   for (const html of componentList) {
//     await $.ajax({
//       url: `../component/${html}.html`,
//       type: 'GET',
//       success: function (data) {
//         const components = data.match(/slot=["'].*["']/gm),
//           componentNameReg = /slot=["'](.*)["']/
//         console.log(components)
//         if (components && components.length > 0) {
//           let componentList = components.map(component => component.match(componentNameReg)[1])
//           slot(componentList)
//         }

//         $(`[slot="${html}"]`).html(data);
//       }
//     });
//   }
// }

import axios from 'axios';

class Slot {
  async init() {
    const data = $('body').html()
    await this.fetchSubComponent(data)
  }
  async fetchSubComponent(data) {
    const slotString = data.match(/slot=["'].*["']/gm),
      componentReg = /slot=["'](.*?)["']/
    if (slotString && slotString.length > 0) {
      let componentList = slotString.map(str => str.match(componentReg)[1])
      // console.log(componentList)
      for (const html of componentList) {
        const { data } = await axios(this.createConfig(html, false))
        $(`[slot="${html}"]`).html(data);
        await this.fetchSubComponent(data)
      }
    }
  }
  createConfig(html, isPage) {
    return {
      method: "get",
      url: isPage ? `../page/${html}.html` : `../component/${html}.html`,
    }
  }
}

export default new Slot()