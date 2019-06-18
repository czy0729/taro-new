/*
 * @Author: czy0729
 * @Date: 2019-06-11 22:33:52
 * @Last Modified by: czy0729
 * @Last Modified time: 2019-06-18 17:18:40
 */
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { observer } from '@tarojs/mobx'
import CImage from '../../img'
import Iconfont from '../../iconfont'
import './item.scss'

const cls = 'c-masonry-list__item'

const Item = ({ detailId, url, height, user, avatar, title, count }) => {
  if (!detailId) {
    return null
  }

  return (
    <View
      className={cls}
      onClick={() => {
        Taro.navigateTo({
          url: `/pages/detail/index?id=${detailId}&cover=${url}&nickName=${user}&avatar=${avatar}`
        })
      }}
    >
      <Image
        className={`${cls}__image`}
        src={`${url}!p1`}
        style={{
          height: `${height}px`
        }}
      />
      <View className='mt-20'>
        <Text className='t-30 l-48 t-desc t-c2'>{title}</Text>
      </View>
      <View className='flex mt-20'>
        <CImage
          src={`${avatar}!p1`}
          width={Taro.pxTransform(40)}
          style={{
            borderRadius: Taro.pxTransform(40),
            overflow: 'hidden'
          }}
        />
        <View className='flex-item ml-8'>
          <Text className='t-28 l-40 t-sub t-c1'>{user}</Text>
        </View>
        <Iconfont className='t-36 t-sub ml-8' name='star' />
        <Text className='t-28 l-40 t-sub ml-8'>{count}</Text>
      </View>
    </View>
  )
}

Item.options = {
  addGlobalClass: true
}

Item.defaultProps = {
  detailId: '',
  url: '',
  width: 0,
  height: 0,
  user: '',
  avatar: '',
  title: '',
  count: ''
}

export default observer(Item)
