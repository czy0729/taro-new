/*
 * @Author: czy0729
 * @Date: 2019-06-13 18:21:34
 * @Last Modified by: czy0729
 * @Last Modified time: 2019-06-14 17:06:08
 */
import Taro, { Component } from '@tarojs/taro'
import { ScrollView, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { ENV } from '@constants'

@inject('appStore')
@observer
class User extends Component {
  config = {
    navigationBarTitleText: '我'
  }

  componentDidShow() {
    if (
      this &&
      this.$scope &&
      typeof this.$scope.getTabBar === 'function' &&
      this.$scope.getTabBar()
    ) {
      this.$scope.getTabBar().setData({
        selected: 2
      })
    }
  }

  render() {
    return (
      <ScrollView
        // className={classNames(cls, 'layout-screen')}
        style={{
          height: ENV.windowHeight
        }}
      >
        <Text>user</Text>
      </ScrollView>
    )
  }
}

export default User
